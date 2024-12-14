import React, { useCallback, useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getCategoryWiseProduct, getSingleProduct } from "../services/api";
import { FilterBtnContext } from "../context/CategoryWiseAllProduct/FilterBtnContext";
import BreadCrumb from "../components/elements/BreadCrumb";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getCategoryWiseProduct } from "../services/api";
import { useContext, useEffect, useState } from "react";
import ProductCard from "../components/elements/ProductCard";
import ProductCardSkeleton from "../components/elements/ProductCardSkeleton";
import BASE_URL from "../../config";
import { MdSort, MdFilterList } from "react-icons/md";
import BreadCrumb from "../components/elements/BreadCrumb";
import FilterProductSidebar from "../components/elements/FilterProductSidebar";
import SortProductTabs from "../components/elements/SortProductTabs";
import Header from "../components/layouts/Header/Header";
import MobileScreenNav from "../components/layouts/Header/MobileScreenNav";
import Footer from "../components/layouts/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";
import { useInView } from "react-intersection-observer";

// Skeleton loading effect
const skeletonArray = new Array(6).fill(true);

const CategoryWiseAllProduct = () => {
  const { category, type } = useParams();
  const [categoryId, setCategoryId] = useState(0);
  const [subtype, setSubType] = useState("");
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(12);

  // Query to fetch category products
  const { data: allProducts, isLoading } = useQuery({
    queryKey: ["category-wise-all-product", categoryId, subtype, skip, take],
    queryFn: () => getCategoryWiseProduct(categoryId, subtype, skip, take),
  });

  // Handle filter and sort buttons for mobile view
  const {
    data: allProducts,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["category-wise-all-product", categoryId, subtype, skip, take], // Add the languageId to the queryKey for better cache management
    queryFn: ({ pageParam }) =>
      getCategoryWiseProduct(categoryId, subtype, pageParam * take, take), // Pass a function that calls getCategoryList

    getNextPageParam: (lastpage, allPages) => {
      return lastpage && lastpage.length > 0 && lastpage.length <= 12
        ? allPages.length + 1
        : undefined;
    },

    initialPageParam: 0,
  });

  const { filterBtnState, setFilterBtnState } = useContext(FilterBtnContext);
  const [sortBtnActive, setSortBtnActive] = useState(false);

  const handleSortBtn = () => {
    setSortBtnActive(!sortBtnActive);
  };

  const queryClient = useQueryClient();

  // Prefetch product data
  const prefetchProduct = useCallback((categoryId, id) => {
    const queryKey = ["single-product", id];
    console.log("Prefetch Query Key:", queryKey);

    queryClient.prefetchQuery({
      queryKey: queryKey,
      queryFn: () => getSingleProduct(categoryId, id),
      staleTime: 1000 * 60 * 3, // Cache duration
    });
  }, [queryClient]);

  // Handle infinite scroll
  const handleInfiniteScroll = () => {
    try {
      const footer = document.querySelector("footer");
      const scrollHeight = document.documentElement.scrollHeight - footer.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollDone = window.scrollY + windowHeight;

      if (scrollDone >= scrollHeight) {
        console.log("You have reached the end of the page");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, []);
  // console.log(filterBtnState);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      if (hasNextPage) {
        fetchNextPage();
      } else {
        toast.success("All products are loaded!", {
          duration: 4000,
          style: {
            background: "linear-gradient(33deg, #030303, #8cbf44)",
            color: "white",
            fontSize: "18px",
          },
        });
      }
    }
  }, [inView, hasNextPage]);

  useEffect(() => {
    // Set categoryId and subtype based on route params
    if (category === "tractor") {
      setCategoryId(1);
      setSubType(type);
    } else if (category === "goods-vehicle") {
      setCategoryId(3);
      setSubType(type);
    } else if (category === "harvester") {
      setCategoryId(4);
      setSubType(type);
    } else if (category === "implements") {
      setCategoryId(5);
      setSubType(type);
    } else if (category === "tyre") {
      setCategoryId(7);
      setSubType(type);
    } else if (category === "agri-inputs") {
      if (type === "seeds") setCategoryId(6);
      if (type === "pesticides") setCategoryId(8);
      if (type === "fertilizer") setCategoryId(9);
    }
  }, [category, type]);

  return (
    <>
      <Header />
      <MobileScreenNav />
      <BreadCrumb />
      <Toaster />
      
      <Toaster position="bottom-right" reverseOrder={false} />

      {/* Mobile View: Sort and Filter Button */}
      <section className="mobile-filter-and-sort-btn lg:hidden block bg-lightgreen sticky md:top-[158px] top-[62px] z-10">
        <div className="container px-10  grid grid-cols-2">
          <button type="button" className="sort-btn text-lg text-white border-r border-white h-full py-2" onClick={() => setFilterBtnState(true)}>
            <MdFilterList className="inline mb-1" /> Filter
          </button>
          <button type="button" className="sort-btn text-lg text-white" onClick={handleSortBtn}>
            <MdSort className="inline mb-1" /> Sort
          </button>
        </div>
      </section>

      <main className="products-container-wrapper container bg-whitesmoke md:px-10 ">
        <FilterProductSidebar />
        <SortProductTabs sort_btn_state={sortBtnActive} />
        
        <section className="category-wise-all-product">
          {isLoading ? (
            <div className="product-skeleton grid md:grid-cols-3 2xl:grid-cols-4 grid-cols-2 px-5 gap-x-4">
              {skeletonArray.map((_, idx) => (
                <ProductCardSkeleton key={idx} />
              ))}
            </div>
          ) : (
            <div className="product-list-container mb-5">
              <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 md:px-5  px-2 md:gap-x-4 gap-x-2">
                {allProducts &&
                  allProducts.map((item) => (
                    <Link
                      key={item.id}
                      to={`${BASE_URL}/${category}/${type}/${item.id}`}
                      onMouseOver={() => prefetchProduct(categoryId, item.id)} // Prefetch when hovering
                    >
                      <ProductCard
                        product_image={item.front_image || item.image1}
                        product_title={item.brand_name + " " + item.model_name || item.title}
                        product_location={item.district_name}
                        product_pricing={item.price}
                        distance_product={item.distance}
                        rent_type={type === "rent" ? ` / ${item.rent_type?.slice(4)}` : ""}
                      />
                    </Link>
                  ))}
                {allProducts?.pages?.map(
                  (page) =>
                    page &&
                    page.map((item) => (
                      <Link
                        key={item.id}
                        to={`${BASE_URL}/${category}/${type}/${item.id}`}
                      >
                        <ProductCard
                          product_image={
                            item.front_image ? item.front_image : item.image1
                          }
                          product_title={
                            `${item.brand_name} ${item.model_name}` ===
                              "Others Others" ||
                            `${item.brand_name} ${item.model_name}` ===
                              "undefined undefined" ||
                            `${item.brand_name} ${item.model_name}` ===
                              "null null"
                              ? item.title
                              : `${item.brand_name} ${item.model_name}`
                          }
                          product_location={item.district_name}
                          product_pricing={item.price}
                          distance_product={item.distance}
                          rent_type={
                            type === "rent"
                              ? item.rent_type
                                ? ` / ${item.rent_type.slice(4)}`
                                : ""
                              : ""
                          }
                        />
                      </Link>
                    ))
                )}
              </div>
              {hasNextPage ? (
                <div
                  ref={ref}
                  className="lod-more-product flex items-center gap-2 justify-center w-full mt-5"
                >
                  <div className="relative">
                    <span className="loader"></span>
                    <img
                      src={preloader_image}
                      alt="this is a icon of preloader"
                      className="absolute top-[49.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg"
                    />
                  </div>
                  <span className="text-darkGreen text-2xl">Loading More</span>
                </div>
              ) : null}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CategoryWiseAllProduct;
