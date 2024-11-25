import logo from "../../../../assets/images/kv-logo.png";
import google_play_store from "../../../../assets/images/Google-Play-Store.png";
import apple__store from "../../../../assets/images/apple-store.png";
import { PiHeartHalfLight } from "react-icons/pi";
import { PiUserCircleDashedFill } from "react-icons/pi";
import AnimateButton from "../../../animation/AnimateButton";
const MiddleHeadSection = () => {
    return (
        <>
            <section
                className="middle-header  py-3 px-2 bg-white"
            >
                <div className="navbar container flex justify-between">
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
            </section>
        </>
    )
}

export default MiddleHeadSection
