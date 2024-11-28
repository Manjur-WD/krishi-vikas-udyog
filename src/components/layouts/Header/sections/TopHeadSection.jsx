import { TbPhoneCall } from "react-icons/tb";
import { MdMarkEmailUnread } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { TbLanguage } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const TopHeadSection = () => {
  return (
    <>
      <section className="top-header bg-lightdark md:block hidden">
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
            <details
              className="inline-block relative header__language--btn"
            >
              <summary className="text-white me-2 border-e pe-2 cursor-pointer  list-none">
                <TbLanguage className="inline me-1 text-lightgreen" />
                ENGLISH
                <IoIosArrowDown className="inline mx-2 downarrow" />
              </summary>
              <ul className="header__language--list  block absolute shadow-2xl py-2 rounded-lg top-[40px] border border-lightdark text-center bg-whitesmoke z-50">
                <li
                  className="cursor-pointer px-5 py-1 hover:bg-lightdark hover:text-white border-b border-b-lightdark"
                >
                  ENGLISH
                </li>
                <li
                  className="cursor-pointer px-5 py-1 hover:bg-lightdark hover:text-white border-b border-b-lightdark"
                >
                  हिंदी
                </li>
                <li
                  className="cursor-pointer px-5 py-1 hover:bg-lightdark hover:text-white"
                >
                  বাংলা
                </li>
              </ul>
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
      </section>
    </>
  );
};

export default TopHeadSection;
