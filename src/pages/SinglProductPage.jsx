import Footer from "../components/layouts/Footer/Footer";
import Header from "../components/layouts/Header/Header";
import MobileScreenNav from "../components/layouts/Header/MobileScreenNav";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { getSingleProduct } from "../services/api";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { Fancybox } from "@fancyapps/ui";

const SinglProductPage = () => {
  const { category, type, id } = useParams();

  const [categoryId, setCategoryId] = useState(0);
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      // Your custom options
    });
    // Tractor
    if (category == "tractor") {
      setCategoryId(1);
    }

    // Goods Vehicle
    else if (category == "goods-vehicle") {
      setCategoryId(3);
    }

    // Harvester
    else if (category == "harvester") {
      setCategoryId(4);
    }

    // Implements
    else if (category == "implements") {
      setCategoryId(5);
    }

    // Tyres
    else if (category == "tyre") {
      setCategoryId(7);
    }

    // Seeds
    else if (category == "agri-inputs" && type == "seeds") {
      setCategoryId(6);
    }
    // Pesticides
    else if (category == "agri-inputs" && type == "pesticides") {
      setCategoryId(8);
    }
    // Fertilizers
    else if (category == "agri-inputs" && type == "fertilizer") {
      setCategoryId(9);
    }
  }, [category, type]);

  const {
    data: singleProduct,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["single-product", categoryId, id],
    queryFn: () => getSingleProduct(categoryId, id),
  });

  const [imgLink, setImgLink] = useState("");

  const handleLink = (linktext) => {
    setImgLink(linktext);
  };

  return (
    <>
      <Header />
      <MobileScreenNav />
      <main className="single-product-wrapper">
        <div className="container px-3 single-product-image grid lg:grid-cols-2 grid-cols-1 my-2">
          <div className="product-image-details-section grid md:grid-cols-[1fr,100px] grid-cols-1">
            <div className="product_image_main p-2">
              <Link
                to={imgLink}
                data-fancybox="product_img"
                data-caption="Front Image"
              >
                {singleProduct && singleProduct.front_image && (
                  <img
                    src={imgLink == "" ? singleProduct.front_image : imgLink}
                    alt="differt side image"
                    className="lg:h-[600px] h-[300px] rounded-3xl w-full object-cover object-center"
                  />
                )}
              </Link>
            </div>
            <div className="product_img_nav overflow-x-auto flex md:flex-col gap-3 items-center py-2 ps-2">
              {singleProduct && singleProduct.front_image && (
                <div className="slide_image">
                  <img
                    src={singleProduct.front_image}
                    alt="front image"
                    className="w-full"
                    onMouseOver={() => {
                      handleLink(singleProduct.front_image);
                    }}
                  />
                </div>
              )}
              {singleProduct && singleProduct.left_image && (
                <div className="slide_image">
                  <Link
                    to={singleProduct.left_image}
                    data-fancybox="product_img"
                    data-caption="Left Image"
                  >
                    <img
                      src={singleProduct.left_image}
                      alt="left image"
                      className="w-full"
                      onMouseOver={() => {
                        handleLink(singleProduct.left_image);
                      }}
                    />
                  </Link>
                </div>
              )}
              {singleProduct && singleProduct.right_image && (
                <div className="slide_image">
                  <Link
                    to={singleProduct.right_image}
                    data-fancybox="product_img"
                    data-caption="Right Image"
                  >
                    <img
                      src={singleProduct.right_image}
                      alt="right image"
                      className="w-full"
                      onMouseOver={() => {
                        handleLink(singleProduct.right_image);
                      }}
                    />
                  </Link>
                </div>
              )}
              {singleProduct && singleProduct.back_image && (
                <div className="slide_image">
                  <Link
                    to={singleProduct.back_image}
                    data-fancybox="product_img"
                    data-caption="Back Image"
                  >
                    <img
                      src={singleProduct.back_image}
                      alt="back image"
                      className="w-full"
                      onMouseOver={() => {
                        handleLink(singleProduct.back_image);
                      }}
                    />
                  </Link>
                </div>
              )}
              {singleProduct && singleProduct.meter_image && (
                <div className="slide_image">
                  <Link
                    to={singleProduct.meter_image}
                    data-fancybox="product_img"
                    data-caption="Meter Image"
                  >
                    <img
                      src={singleProduct.meter_image}
                      alt="meter image"
                      className="w-full"
                      onMouseOver={() => {
                        handleLink(singleProduct.meter_image);
                      }}
                    />
                  </Link>
                </div>
              )}
              {singleProduct && singleProduct.tyre_image && (
                <div className="slide_image">
                  <Link
                    to={singleProduct.tyre_image}
                    data-fancybox="product_img"
                    data-caption="Tyre Image"
                  >
                    <img
                      src={singleProduct.tyre_image}
                      alt="tyre image"
                      className="w-full"
                      onMouseOver={() => {
                        handleLink(singleProduct.tyre_image);
                      }}
                    />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SinglProductPage;
