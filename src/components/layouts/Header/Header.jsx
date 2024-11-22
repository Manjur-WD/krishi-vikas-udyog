import { TbPhoneCall } from "react-icons/tb";
import { MdMarkEmailUnread } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { TbLanguage } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

import logo from "../../../assets/images/kv-logo.png";
import tractor_icon from "../../../assets/images/tractor.png";
import sell_icon from "../../../assets/images/sell.svg";
import rent_icon from "../../../assets/images/rent.svg";

import google_play_store from "../../../assets/images/Google-Play-Store.png";
import apple__store from "../../../assets/images/apple-store.png";
import { PiHeartHalfLight } from "react-icons/pi";
import { PiUserCircleDashedFill } from "react-icons/pi";
import { TbListDetails } from "react-icons/tb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Navbar from "./Navbar";
// FRAMER MOTION
import { motion } from "motion/react";
import AnimateButton from "../../animation/AnimateButton";
import axios from "axios";
import { useEffect, useState } from "react";

const Header = () => {
  const [categories, setCategories] = useState([]);

  // CATEGORY API CALL
  const getCategories = async () => {
    const response = await axios.post(
      "https://krishivikas.com/api/v2/category-list",
      { language_id: 1 },
      {
        headers: {
          Authorization:
            "Bearer 29856|LNX22bIkPaNtNRIZUaIkT9JxYlE3sQmzdV1GKXGe13277162",
        },
      }
    );
    setCategories(response.data.result.response);
  };

  useEffect(() => {
    getCategories();
  }, []);

  console.log(categories);

  return (
    <header className="header" id="header">
      <motion.section
        className="top-header bg-lightdark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2, ease: "linear" }}
      >
        <div className="container flex justify-between py-1">
          <div className="header__phone__email">
            <a href="#" className="text-white me-2  border-e pe-2">
              <MdMarkEmailUnread className="inline me-1 text-lightgreen" />
              support@krishivikas.com
            </a>
            <a href="#" className="text-white">
              <TbPhoneCall className="inline me-1 text-lightgreen" />
              8100975657
            </a>
          </div>
          <div className="header__pincode__language__social">
            <a href="#" className="text-white me-2 border-e pe-2">
              <HiLocationMarker className="inline me-1 text-lightgreen" />
              Location 700152
            </a>
            <details className="inline-block relative header__language--btn">
              <summary className="text-white me-2 border-e pe-2 cursor-pointer  list-none">
                <TbLanguage className="inline me-1 text-lightgreen" />
                English
                <IoIosArrowDown className="inline mx-2 downarrow" />
              </summary>
              <motion.ul className="header__language--list  block absolute shadow-2xl py-2 rounded-lg top-[40px] border border-lightdark text-center bg-whitesmoke z-50">
                <li className="cursor-pointer px-5 py-1 hover:bg-lightdark hover:text-white border-b border-b-lightdark">
                  ENGLISH
                </li>
                <li className="cursor-pointer px-5 py-1 hover:bg-lightdark hover:text-white border-b border-b-lightdark">
                  BENGALI
                </li>
                <li className="cursor-pointer px-5 py-1 hover:bg-lightdark hover:text-white">
                  HINDI
                </li>
              </motion.ul>
            </details>
            <div className="header__social--links inline ms-2">
              <a href="#">
                <FaFacebook className="inline me-4 text-white hover:text-lightgreen hover:scale-150" />
              </a>
              <a href="#">
                <AiFillInstagram className="inline me-4 text-white hover:text-lightgreen hover:scale-150" />
              </a>
              <a href="#">
                <FaXTwitter className="inline text-white hover:text-lightgreen hover:scale-150" />
              </a>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        className="middle-header container py-3 px-2 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}
      >
        <div className="navbar flex justify-between">
          <a href="#">
            <img
              src={logo}
              alt="this is brand logo"
              className="md:w-[200px] w-[150px]"
            />
          </a>
          <div className="header__app--link flex items-center">
            <p className="text-lightdark me-2">DOWNLOAD KRISHI VIKAS APP</p>
            <a href="#" className="me-1">
              <AnimateButton>
                <img
                  src={google_play_store}
                  alt="this is google play store icon"
                  className="w-[130px]"
                />
              </AnimateButton>
            </a>
            <a href="#">
              <AnimateButton>
                <img
                  src={apple__store}
                  alt="this is google apple store icon"
                  className="w-[130px]"
                />
              </AnimateButton>
            </a>
          </div>
          <div className="header__wishlist-login flex items-center">
            <button
              type="button"
              className=" hover:scale-95 px-4 py-1 relative"
            >
              <span className="wishlist--count bg-lightdark text-white px-2 rounded-full absolute left-8 text-sm top-0">
                0
              </span>
              <PiHeartHalfLight className="me-2 inline align-bottom text-3xl text-lightgreen" />
              <span className="text-lg ms-2">Wishlist</span>
            </button>
            <button
              type="button"
              className="border border-dashed border-transparent hover:border-gray-200 hover:scale-95 px-4 py-1"
            >
              <PiUserCircleDashedFill className="me-2 inline align-bottom text-3xl text-lightgreen" />
              <span className="text-lg">Login</span>
            </button>
          </div>
        </div>
      </motion.section>
      <motion.section
        className="bottom-header px-2 py-2 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.8, ease: "linear" }}
      >
        <nav className="navbar container flex justify-between items-center">
          <div className="header__category--btn">
            <DropdownMenu>
              <AnimateButton>
                <DropdownMenuTrigger className="border border-dashed rounded-3xl shadow-lg px-2 py-1 flex items-center text-white outline-none">
                  <TbListDetails className="inline me-2 text-lightgreen bg-white p-1 text-2xl rounded-full" />
                  ALL CATEGORIES
                  <IoIosArrowDown className="ms-2" />
                </DropdownMenuTrigger>
              </AnimateButton>
              <DropdownMenuContent className="w-[200px] mt-2 rounded-2xl px-2 py-2">
                {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                {/* <DropdownMenuSeparator /> */}

                {categories.map((category) => {
                  return (
                    <>
                      <DropdownMenuItem key={category.id} className="text-darkGreen uppercase bg-white rounded-2xl shadow p-2 mb-2 hover:scale-95 transition-all cursor-pointer" >
                        <img
                          src={category.category_icon}
                          alt="tractor-icon"
                          className="bg-white shadow-lg rounded-full p-1"
                          width={35}
                        />{" "}
                        {category.category_name}
                      </DropdownMenuItem>
                    </>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* <div className="header__navlist">
            <ul className="list-none flex gap-8 text-white">
              <li><a href="#">HOME</a></li>
              <li><a href="#">TRACTOR</a></li>
              <li><a href="#">GOODS VEHICLES</a></li>
              <li><a href="#">AGRI INPUT</a></li>
              <li><a href="#">HARVESTER</a></li>
              <li><a href="#">IMPLEMENTS</a></li>
              <li><a href="#">TYRES</a></li>
            </ul>
          </div> */}
          <Navbar />
          <div className="header__sell-rent-btn flex gap-2">
            <AnimateButton>
              <a
                href="#"
                className="header__sell-btn border border-dashed rounded-3xl shadow-lg ps-1 pe-3 py-1 flex items-center text-white outline-none"
              >
                <img
                  src={sell_icon}
                  alt="this is a sell icon"
                  className="me-2 p-1 bg-lightgreen rounded-full shadow"
                  width={25}
                />
                SELL
              </a>
            </AnimateButton>
            <AnimateButton>
              <a
                href="#"
                className="header__sell-btn border border-dashed rounded-3xl shadow-lg pe-3 ps-1 py-1 flex items-center text-white outline-none"
              >
                <img
                  src={rent_icon}
                  alt="this is a sell icon"
                  className="me-2 p-1 bg-lightgreen rounded-full shadow"
                  width={25}
                />
                RENT
              </a>
            </AnimateButton>
          </div>
        </nav>
      </motion.section>
    </header>
  );
};

export default Header;
