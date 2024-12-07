import BreadCrumb from "../components/elements/BreadCrumb";
import { useQuery } from "@tanstack/react-query";
import { getCategoryWiseProduct } from "../services/api";
import { useContext, useEffect, useState } from "react";
import ProductCard from "../components/elements/ProductCard";
import FilterProductSidebar from "../components/elements/FilterProductSidebar";
import SortProductTabs from "../components/elements/SortProductTabs";
import { Link, useParams } from "react-router-dom";
import preloader_image from "../../src/assets/images/favicon/favicon-32x32.png";
import Header from "../components/layouts/Header/Header";
import MobileScreenNav from "../components/layouts/Header/MobileScreenNav";
import Footer from "../components/layouts/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";

// import { Skeleton } from "@/components/ui/skeleton";
const skeletonArray = new Array(6).fill(true);

import { MdSort } from "react-icons/md";
import { MdFilterList } from "react-icons/md";
import { FilterBtnContext } from "../context/CategoryWiseAllProduct/FilterBtnContext";
import BASE_URL from "../../config";

const CategoryWiseAllProduct = () => {
  const { category, type } = useParams();

  // Mobile View :  Sort and filter button state
  const [sortBtnActive, setSortBtnActive] = useState(false);

  const handleSortBtn = () => {
    setSortBtnActive(!sortBtnActive);
  };

  // const handleFilterBtn = () => {};

  const [categoryId, setCategoryId] = useState(0);
  const [subtype, setSubType] = useState("");
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(12);
  const {
    data: allProducts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["category-wise-all-product", categoryId, subtype, skip, take], // Add the languageId to the queryKey for better cache management
    queryFn: () => getCategoryWiseProduct(categoryId, subtype, skip, take), // Pass a function that calls getCategoryList
  });

  const { filterBtnState, setFilterBtnState } = useContext(FilterBtnContext);
  console.log(filterBtnState);

  useEffect(() => {
    // Tractor
    if (category == "tractor" && type == "new") {
      setCategoryId(1);
      setSubType(type);
    } else if (category == "tractor" && type == "old") {
      setCategoryId(1);
      setSubType(type);
    } else if (category == "tractor" && type == "rent") {
      setCategoryId(1);
      setSubType(type);
    }

    // Goods Vehicle
    else if (category == "goods-vehicle" && type == "new") {
      setCategoryId(3);
      setSubType(type);
    } else if (category == "goods-vehicle" && type == "old") {
      setCategoryId(3);
      setSubType(type);
    } else if (category == "goods-vehicle" && type == "rent") {
      setCategoryId(3);
      setSubType(type);
    }

    // Harvester
    else if (category == "harvester" && type == "new") {
      setCategoryId(4);
      setSubType(type);
    } else if (category == "harvester" && type == "old") {
      setCategoryId(4);
      setSubType(type);
    } else if (category == "harvester" && type == "rent") {
      setCategoryId(4);
      setSubType(type);
    }

    // Implements
    else if (category == "implements" && type == "new") {
      setCategoryId(5);
      setSubType(type);
    } else if (category == "implements" && type == "old") {
      setCategoryId(5);
      setSubType(type);
    } else if (category == "implements" && type == "rent") {
      setCategoryId(5);
      setSubType(type);
    }

    // Tyres
    else if (category == "tyre" && type == "new") {
      setCategoryId(7);
      setSubType(type);
    } else if (category == "tyre" && type == "old") {
      setCategoryId(7);
      setSubType(type);
    }

    // Seeds
    else if (category == "agri-inputs" && type == "seeds") {
      setCategoryId(6);
      setSubType("");
    }
    // Pesticides
    else if (category == "agri-inputs" && type == "pesticides") {
      setCategoryId(8);
      setSubType("");
    }
    // Fertilizers
    else if (category == "agri-inputs" && type == "fertilizer") {
      setCategoryId(9);
      setSubType("");
    }
  }, [category, type]);

  // console.log(allProducts);

  return (
    <>
      <Header />
      <MobileScreenNav />
      <BreadCrumb />
      <Toaster />

      {/* Mobile View: Sort and Filter Button */}
      <section className="mobile-filter-and-sort-btn lg:hidden block bg-lightgreen sticky md:top-[158px] top-[62px] z-10">
        <div className="container px-10  grid grid-cols-2">
          <button
            type="button"
            className="sort-btn text-lg text-white border-r border-white h-full py-2"
            onClick={() => {
              setFilterBtnState(true);
            }}
          >
            <MdFilterList className="inline mb-1" /> Filter
          </button>
          <button
            type="button"
            className="sort-btn text-lg text-white"
            onClick={() => {
              handleSortBtn();
            }}
          >
            <MdSort className="inline mb-1" /> Sort
          </button>
        </div>
      </section>
      {/* Mobile View: Sort and Filter Button */}
      <main className="products-container-wrapper container bg-whitesmoke md:px-10 ">
        <FilterProductSidebar />
        <SortProductTabs sort_btn_state={sortBtnActive} />
        <section className="category-wise-all-product">
          {isLoading ? (
            <div className="product-skeleton grid  md:grid-cols-3 2xl:grid-cols-4 grid-cols-2 px-5 gap-x-4">
              {skeletonArray.map((_, idx) => (
                <div
                  className="product-card bg-white rounded-3xl overflow-hidden my-2 shadow-lg border hover:scale-95 transition-all"
                  key={idx}
                >
                  <div className="product_image_skeleton p-[2px] relative">
                    <div className="w-full md:h-[220px] h-[150px] object-cover object-center rounded-3xl relative flex items-center justify-center">
                      <span className="loader"></span>
                      <img
                        src={preloader_image}
                        alt="this is a icon of preloader"
                        className="absolute top-[49.8%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg"
                      />
                    </div>
                  </div>
                  <p className="text-center p-5 product-title">...</p>
                  <div className="flex text-sm justify-between items-center px-5 py-3 location-and-price">
                    <p className="distance">...</p>
                    <p className="pricing">...</p>
                  </div>
                  <p className="distance bg-lightdark text-white text-center py-2">
                    ...
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="product-list-container mb-10">
              <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 md:px-5  px-2 md:gap-x-4 gap-x-2">
                {allProducts &&
                  allProducts.map((item) => (
                    <Link key={item.id} to={`${BASE_URL}/${category}/${type}/${item.id}`}>
                    <ProductCard   
                      product_image={
                        item.front_image ? item.front_image : item.image1
                      }
                      product_title={
                        `${item.brand_name} ${item.model_name}` ===
                          "Others Others" ||
                        `${item.brand_name} ${item.model_name}` ===
                          "undefined undefined" ||
                        `${item.brand_name} ${item.model_name}` === "null null"
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
                  ))}
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CategoryWiseAllProduct;
