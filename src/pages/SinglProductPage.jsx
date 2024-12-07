import Footer from "../components/layouts/Footer/Footer";
import Header from "../components/layouts/Header/Header";
import MobileScreenNav from "../components/layouts/Header/MobileScreenNav";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { getSingleProduct } from "../services/api";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { Fancybox } from "@fancyapps/ui";

import { FaMapLocationDot } from "react-icons/fa6";
import { IoCalendar } from "react-icons/io5";
import { TbCurrencyRupee } from "react-icons/tb";
import { RiUpload2Fill } from "react-icons/ri";


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
  const[imgType , setImgType] = useState("");

  const handleLink = (linktext , imgtype ) => {
    setImgLink(linktext);
    setImgType(imgtype);
  };

  return (
    <>
      <Header />
      <MobileScreenNav />
      <main className="single-product-wrapper">
        <div className="container  single-product-image grid lg:grid-cols-2 grid-cols-1 my-2">
          <div className="product-image-details-section grid md:grid-cols-[80px,1fr] grid-cols-[50px,1fr]">
            
            <div className="product_img_nav overflow-x-auto flex flex-col gap-3 items-center py-2 ps-2">
              {singleProduct && singleProduct.front_image && (
                <div className="slide_image">
                  <Link
                    to={singleProduct.front_image}
                    data-fancybox="product_img"
                    data-caption="Front Image"
                  >
                    <img
                      src={singleProduct.front_image}
                      alt="front image"
                      className="w-full"
                      onMouseOver={() => {
                        handleLink(singleProduct.front_image,"Front Image");
                      }}
                    />
                  </Link>

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
                        handleLink(singleProduct.left_image, "Left Image");
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
                        handleLink(singleProduct.right_image, "Right Image");
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
                        handleLink(singleProduct.back_image, "Back Image");
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
                        handleLink(singleProduct.meter_image,"Meter Image");
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
                        handleLink(singleProduct.tyre_image,"Tyre Image");
                      }}
                    />
                  </Link>
                </div>
              )}
            </div>
            <div className="product_image_main p-2">
              <Link
                to={imgLink == "" ? singleProduct && singleProduct.front_image : imgLink}
                data-fancybox="product_img"
                data-caption={imgType}
              >
                {singleProduct && singleProduct.front_image && (
                  <img
                    src={imgLink == "" ? singleProduct.front_image : imgLink}
                    alt="differt side image"
                    className="lg:h-[550px] h-[350px] shadow rounded-3xl w-full object-cover object-center"
                  />
                )}
              </Link>
            </div>
          </div>
          <div className="product_description border shadow m-3 p-3 rounded-3xl">
            <h2 className="prod-name md:text-3xl text-2xl text-darkGreen font-black">{singleProduct && `${singleProduct.brand_name} ${singleProduct.model_name}`}</h2>
            <h3 className="uppercase my-2 md:text-xl"><FaMapLocationDot className="inline mb-2 text-darkGreen"/> {singleProduct && `${singleProduct.address}, ${singleProduct.city_name}, ${singleProduct.district_name}, ${singleProduct.state_name} `}</h3>
            <h5 className="uppercase mb-2 md:text-xl"><IoCalendar className="inline mb-2 text-darkGreen"/> {singleProduct && `${singleProduct.created_at.slice(0,10)}`}</h5>
            <h4 className="uppercase mb-2 md:text-4xl text-2xl font-bold text-darkGreen"><TbCurrencyRupee className="inline mb-2 text-darkGreen"/> {singleProduct && `${singleProduct.price}`}</h4>
            <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="product_spec border overflow-hidden rounded-3xl">
              <p className="p-3 text-center heading shadow inline-block text-white  md:m-2 rounded-3xl font-bold">Specifications</p>
              <ul className="mt-2">
                <li><span>RC Available</span><span>{singleProduct && singleProduct.rc_available == 0 ? "No" : "Yes"}</span></li>
                <li><span>NOC Available</span><span>{singleProduct && singleProduct.noc_available == 0 ? "No" : "Yes"}</span></li>
                <li><span>Price Negotiable</span> <span>{singleProduct && singleProduct.registration_no}</span></li>
                <li><span>Registration Number</span></li>
                <li><span>Year Of Purchase</span></li>
              </ul>
            </div>
            </div>
            
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SinglProductPage;
