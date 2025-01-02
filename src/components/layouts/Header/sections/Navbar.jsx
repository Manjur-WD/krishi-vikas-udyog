import { useContext, useRef } from "react";
import { menuItems } from "../menuItems.js";
import "animate.css";
import { NavTogglerContext } from "../../../../context/HeaderMenuContext/NavTogglerContext.jsx";
import { CgCloseR } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { activeNav, setActiveNav, subMenuStatus, setSubMenuStatus } =
    useContext(NavTogglerContext);
  const { t } = useTranslation();

  return (
    <ul
      className={
        activeNav
          ? "nav-menus active flex lg:flex-row flex-col text-white items-center gap-10 uppercase xl:text-sm text-[12px]"
          : "nav-menus flex lg:flex-row flex-col text-white items-center gap-10 uppercase xl:text-sm text-[12px]"
      }
    >
      {menuItems.map((navlink, index) => (
        <li className="relative nav-link" key={navlink.id || index}>
          {t(navlink.label)}
          {navlink.hasSubMenu && (
            <div
              className={
                index >= 3
                  ? "submenu absolute pt-[13px] right-0 z-50 animate__animated animate__fadeIn animate__faster"
                  : "submenu absolute pt-[13px] z-50 animate__animated animate__fadeIn animate__faster"
              }
            >
              <div className={
                index < 3 ?
                  "submenu-child bg-white shadow-lg text-darkGreen md:flex md:flex-row-reverse md:gap-3 md:w-[450px] w-[350px] p-1 rounded-lg items-center"
                  :
                  "submenu-child bg-white shadow-lg text-darkGreen md:flex md:flex-row md:gap-3 md:w-[450px] w-[350px] p-1 rounded-lg items-center"
              }>
                {navlink.image && (
                  <img
                    src={navlink.image}
                    alt="this is a dropdown image"
                    className="w-1/2 h-full rounded-lg shadow-lg object-cover md:block hidden"
                  />
                )}
                <ul className="w-1/2">
                  {navlink.subMenu.map((sublink, subIndex) => (
                    <li
                      className="mb-2 text-center"
                      key={sublink.id || subIndex}
                    >
                      <Link to={sublink.link}>{t(sublink.label)}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </li>
      ))}
      <li>
        <button
          type="button"
          className="closeNav lg:hidden block absolute top-5 right-5 text-2xl"
          onClick={() => setActiveNav(false)}
        >
          <CgCloseR />
        </button>
      </li>
    </ul>
  );
};

export default Navbar;
