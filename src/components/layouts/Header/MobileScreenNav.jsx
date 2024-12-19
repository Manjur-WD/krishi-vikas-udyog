import { TbHomeFilled } from "react-icons/tb";
import { RiHeart2Fill } from "react-icons/ri";
import { RiStickyNoteAddFill } from "react-icons/ri";
import { TiUser } from "react-icons/ti";
import { IoAdd } from "react-icons/io5";


const MobileScreenNav = () => {
  return (
    <>
      <div className="mobile-nav flex justify-between border-t border-t-gray-300 gap-5 text-2xl fixed md:-bottom-[100%] bottom-0 md:-z-50 z-50 bg-white px-10 py-5 rounded-t-3xl shadow-xl w-full left-1/2 -translate-x-1/2">
        <div className="left_nav_menus flex items-center gap-10">
          <div className="mobile-nav__menus">
            <a href="#">
              <TbHomeFilled />
            </a>
          </div>
          <div className="mobile-nav__menus">
            <a href="#">
              <RiHeart2Fill />
            </a>
          </div>
        </div>
        <div className="mobile-nav__menus mobile-nav__sell--rent--btn text-3xl absolute left-1/2 -translate-x-1/2 -top-6">
          <a href="#">
            <IoAdd />
          </a>
        </div>
        <div className="right_nav_menus flex items-center gap-10">
          <div className="mobile-nav__menus">
            <a href="#">
              <RiStickyNoteAddFill />
            </a>
          </div>
          <div className="mobile-nav__menus">
            <a href="#">
              <TiUser />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileScreenNav;
