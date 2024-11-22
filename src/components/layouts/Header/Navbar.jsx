// import tractor_drop from "../../../assets/images/trac-drop.jpg";
import { menuItems } from "../../../components/layouts/Header/menuItems.js";
console.log(menuItems);

import "animate.css";

const Navbar = () => {
  return (
    <>
      <ul className="nav-menus flex text-white items-center gap-10 uppercase">
        {menuItems.map((navlink, index) => (
          <>
            <li className="relative nav-link" key={index}>
              {navlink.label}
              {navlink.hasSubMenu ? (
                <div
                  className={
                    index >= 4
                      ? "submenu absolute pt-[13px] right-0 animate__animated animate__zoomIn animate__faster"
                      : "submenu absolute pt-[13px] animate__animated animate__zoomIn animate__faster"
                  }
                >
                  <div className="submenu-child  bg-white shadow-lg text-darkGreen grid grid-cols-2 w-[450px] p-2 rounded-lg items-center">
                    <img
                      src={navlink.image ? navlink.image : null}
                      alt="this is a dropdown image"
                      className="w-full h-full rounded-lg shadow-lg object-cover"
                    />
                    <ul>
                      {navlink.subMenu.map((sublink) => (
                        <>
                          <li className="mb-2 text-center" key={sublink.label}>{sublink.label}</li>
                        </>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : null}
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
