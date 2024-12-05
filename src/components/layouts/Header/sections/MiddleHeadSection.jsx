import logo from "../../../../assets/images/kv-logo.png";
import google_play_store from "../../../../assets/images/Google-Play-Store.png";
import apple__store from "../../../../assets/images/apple-store.png";
import { PiHeartHalfLight } from "react-icons/pi";
import { PiUserCircleDashedFill } from "react-icons/pi";
import AnimateButton from "../../../animation/AnimateButton";
import { CgMenuLeft } from "react-icons/cg";
import { useContext } from "react";
import { NavTogglerContext } from "../../../../context/HeaderMenuContext/NavTogglerContext";
import { Link } from "react-router-dom";

const MiddleHeadSection = () => {
    const {setActiveNav} = useContext(NavTogglerContext);
  return (
    <>
      <section className="middle-header  py-3 lg:px-5 md:px-3 bg-white md:shadow-none shadow">
        <div className="navbar container flex justify-between md:p-0 px-5">
          <button
            type="button"
            className="lg:hidden block nav-toggler border px-2 rounded-xl shadow shadow-whitesmoke"
            onClick={()=>setActiveNav(true)}
          >
            <CgMenuLeft className="text-2xl text-gray-300" />
          </button>
          <Link to="/krishi-vikas-udyog/">
            <img
              src={logo}
              alt="this is brand logo"
              className="md:w-[200px] w-[150px]"
            />
          </Link>
          <div className="header__app--link items-center lg:flex hidden">
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
          <div className="header__wishlist-login items-center md:flex hidden">
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
              className="md:block hidden border border-dashed border-transparent hover:border-gray-200 hover:scale-95 px-4 py-1"
            >
              <PiUserCircleDashedFill className="me-2 inline align-bottom text-3xl text-lightgreen" />
              <span className="text-lg">Login</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MiddleHeadSection;
