import { useContext } from "react";
import { menuItems } from "../menuItems.js";
import "animate.css";
import { NavTogglerContext } from "../../../../context/HeaderMenuContext/NavTogglerContext.jsx";
import { CgCloseR } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { activeNav, setActiveNav } = useContext(NavTogglerContext);
  console.log(activeNav);

  return (
    <ul
      className={
        activeNav
          ? "nav-menus active flex lg:flex-row flex-col text-white items-center gap-10 uppercase"
          : "nav-menus flex lg:flex-row flex-col text-white items-center gap-10 uppercase"
      }
    >
      {menuItems.map((navlink, index) => (
        <li className="relative nav-link" key={navlink.id || index}>
          
          {navlink.label}
          {navlink.hasSubMenu && (
            <div
              className={
                index >= 4
                  ? "submenu absolute pt-[13px] right-0 z-50 animate__animated animate__fadeIn animate__faster"
                  : "submenu absolute pt-[13px] z-50 animate__animated animate__fadeIn animate__faster"
              }
            >
              <div className="submenu-child bg-white shadow-lg text-darkGreen md:grid md:grid-cols-2 md:w-[450px] w-[350px] p-1 rounded-lg items-center">
                {navlink.image && (
                  <img
                    src={navlink.image}
                    alt="this is a dropdown image"
                    className="w-full h-full rounded-lg shadow-lg object-cover md:block hidden"
                  />
                )}
                <ul>
                  {navlink.subMenu.map((sublink, subIndex) => (
                    <li
                      className="mb-2 text-center"
                      key={sublink.id || subIndex}
                    >

                      <Link to={sublink.link}>{sublink.label}</Link>
                      
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
