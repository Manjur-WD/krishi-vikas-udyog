
import { IoIosArrowDown } from "react-icons/io";



import sell_icon from "../../../assets/images/sell.svg";
import rent_icon from "../../../assets/images/rent.svg";

import { TbListDetails } from "react-icons/tb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Navbar from "./Navbar";
// FRAMER MOTION
import { motion , stagger } from "motion/react";
import AnimateButton from "../../animation/AnimateButton";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import TopHeadSection from "./sections/TopHeadSection";
import MiddleHeadSection from "./sections/MiddleHeadSection";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [languageId, setLanguageId] = useState(1);
  const languageBtn = useRef();

  // CATEGORY API CALL
  const getCategories = async () => {
    const response = await axios.post(
      "https://krishivikas.com/api/v2/category-list",
      { language_id: languageId },
      {
        headers: {
          Authorization:
            "Bearer 29856|LNX22bIkPaNtNRIZUaIkT9JxYlE3sQmzdV1GKXGe13277162",
        },
      }
    );
    // Close the dropdown if the button exists
    setCategories(response.data.result.response);
  };

  const languageChange = (id) => {
    setLanguageId(id); // Update the languageId state
    languageBtn.current.removeAttribute("open"); // Close the dropdown after selection
  };

  useEffect(() => {
    getCategories();
  }, [languageId]);

  console.log(categories);

  return (
    <header className="header" id="header">
      <TopHeadSection  languageBtn={languageBtn} languageId={languageId} />
      <MiddleHeadSection />
      
      <section
        className="bottom-header px-2 py-2 bg-white"
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
                {categories.map((category) => {
                  return (
                    <>
                      <DropdownMenuItem
                        key={category.id}
                        className="text-darkGreen uppercase bg-white rounded-2xl shadow p-2 mb-2 hover:scale-95 transition-all cursor-pointer"
                      >
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
      </section>
    </header>
  );
};

export default Header;
