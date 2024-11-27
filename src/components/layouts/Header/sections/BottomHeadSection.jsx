import { IoIosArrowDown } from "react-icons/io";

import sell_icon from "../../../../assets/images/sell.svg";
import rent_icon from "../../../../assets/images/rent.svg";

import { TbListDetails } from "react-icons/tb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Navbar from "../sections/Navbar";

import AnimateButton from "../../../animation/AnimateButton";
import { getCategoryList } from "../../../../services/api";
import { useQuery } from "@tanstack/react-query";
import Preloader from "../../../elements/Preloader";

const BottomHeadSection = () => {
  // Use the useQuery hook to fetch data
  const {
    data: categoryList,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["category-list", 1], // Add the languageId to the queryKey for better cache management
    queryFn: () => getCategoryList(1), // Pass a function that calls getCategoryList
  });

  // Handle loading and error states
  if (isLoading) {
    return <Preloader />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <section className="bottom-header px-2 py-2 bg-white">
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
                {
                  categoryList && categoryList.length > 0 ? 
                  (
                    categoryList.map((item)=>(
                        <DropdownMenuItem className="text-darkGreen uppercase bg-white rounded-2xl shadow p-2 mb-2 hover:scale-95 transition-all cursor-pointer" key={item.category_id}>
                          <img
                            src={item.category_icon}
                            alt="tractor-icon"
                            className="bg-white shadow-lg rounded-full p-1"
                            width={35}
                          />{" "}
                          {item.category_name}
                        </DropdownMenuItem>

                    ))
                  ):(
                    <div>No Data Available</div>
                  )
                  
                }
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
    </>
  );
};

export default BottomHeadSection;
