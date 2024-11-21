import { TbPhoneCall } from "react-icons/tb";
import { MdMarkEmailUnread } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { TbLanguage } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../../assets/images/kv-logo.png";
import google_play_store from "../../../assets/images/Google-Play-Store.png";
import apple__store from "../../../assets/images/apple-store.png";
import { PiHeartHalfLight } from "react-icons/pi";
import { PiUserCircleDashedFill } from "react-icons/pi";
import { TbListDetails } from "react-icons/tb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// FRAMER MOTION
import { motion } from "motion/react";
import AnimateButton from "../../animation/AnimateButton";

const Header = () => {
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
        className="bottom-header py-2 px-2 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.8, ease: "linear" }}
      >
        <nav className="navbar container flex justify-between">
          <div className="header__category--btn">
            <DropdownMenu>
              <AnimateButton>
                <DropdownMenuTrigger className="border border-dashed px-5 py-1 flex items-center text-white font-semibold outline-none">
                  <TbListDetails className="inline me-1" />
                  ALL CATEGORIES
                  <IoIosArrowDown className="ms-2" />
                </DropdownMenuTrigger>
              </AnimateButton>
              <DropdownMenuContent className="w-full">
                {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                {/* <DropdownMenuSeparator /> */}
                <DropdownMenuItem>PROFILE</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </motion.section>
    </header>
  );
};

export default Header;
