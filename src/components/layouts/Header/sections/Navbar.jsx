import { menuItems } from "../menuItems.js";
import "animate.css";

const Navbar = () => {
  return (
    <ul className="nav-menus flex text-white items-center gap-10 uppercase">
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
              <div className="submenu-child bg-white shadow-lg text-darkGreen grid grid-cols-2 w-[450px] p-1 rounded-lg items-center">
                {navlink.image && (
                  <img
                    src={navlink.image}
                    alt="this is a dropdown image"
                    className="w-full h-full rounded-lg shadow-lg object-cover"
                  />
                )}
                <ul>
                  {navlink.subMenu.map((sublink, subIndex) => (
                    <li className="mb-2 text-center" key={sublink.id || subIndex}>
                      {sublink.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
