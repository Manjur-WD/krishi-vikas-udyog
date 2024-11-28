import { TbPhoneCall } from "react-icons/tb";
import logo from "../../../assets/images/kv with R.png";
import { MdMarkEmailUnread } from "react-icons/md";
import AnimateButton from "../../animation/AnimateButton";
import google_play_store from "../../../assets/images/Google-Play-Store.png";
import apple__store from "../../../assets/images/apple-store.png";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import makeInIndia from "../../../assets/images/make-in-india-logo-make-in-india-icon-free-free-vector-removebg-preview.png"

const FooterMenus = () => {
  return (
    <>
      <div className="footermenus bg-darkGreen py-10">
        <div className="container grid md:grid-cols-4 md:p-0 p-5 grid-cols-1">
          <div className="footermenus__box">
            <img
              src={logo}
              alt="this is the logo on footer"
              className="bg-white w-1/2 rounded-lg mb-3"
            />
            <a href="#" className="text-white block text-lg">
              <TbPhoneCall className="inline me-1 text-lightgreen" />
              8100975657
            </a>
            <a href="#" className="text-white me-2 block text-lg">
              <MdMarkEmailUnread className="inline me-1 text-lightgreen" />
              support@krishivikas.com
            </a>

            <div className="footer_social my-5">
              <p className="uppercase text-lg text-white">Follow Us</p>
              <div className="footer__social_icons text-white flex gap-3 mt-2">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <RiInstagramFill />
                </a>
                <a href="#">
                  <FaXTwitter />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
              </div>
            </div>

            <div className="install_link">
              <p className="text-white text-lg me-2 mb-2">
                DOWNLOAD KRISHI VIKAS APP
              </p>

              <div className="flex">
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
                      className="w-[130px] rounded"
                    />
                  </AnimateButton>
                </a>
              </div>
            </div>
          </div>
          <div className="footermenus__box">
            <p className="text-2xl uppercase text-white mb-5">SELL PRODUCTS</p>
            <div className="sell__links text-white">
              <a href="#">NEW TRACTOR</a>
              <a href="#">USED TRACTOR</a>
              <a href="#">NEW GOODS VEHICLE</a>
              <a href="#">USED GOODS VEHICLE</a>
              <a href="#">NEW HARVESTER</a>
              <a href="#">USED HARVESTER</a>
              <a href="#">NEW IMPLEMENTS</a>
              <a href="#">USED IMPLEMENTS</a>
              <a href="#">NEW TYRES</a>
              <a href="#">SELL SEEDS</a>
              <a href="#">SELL PESTICIDES</a>
              <a href="#">SELL FERTILIZERS</a>
            </div>
          </div>
          <div className="footermenus__box">
            <p className="text-2xl uppercase text-white mb-5">BUY PRODUCTS</p>
            <div className="buy__links text-white">
              <a href="#">NEW TRACTOR</a>
              <a href="#">USED TRACTOR</a>
              <a href="#">NEW GOODS VEHICLE</a>
              <a href="#">USED GOODS VEHICLE</a>
              <a href="#">NEW HARVESTER</a>
              <a href="#">USED HARVESTER</a>
              <a href="#">NEW IMPLEMENTS</a>
              <a href="#">USED IMPLEMENTS</a>
              <a href="#">NEW TYRES</a>
              <a href="#">SELL SEEDS</a>
              <a href="#">SELL PESTICIDES</a>
              <a href="#">SELL FERTILIZERS</a>
            </div>
          </div>
          <div className="footermenus__box">
            <p className="text-2xl uppercase text-white mb-5">RENT PRODUCTS</p>
            <div className="rent__links text-white">
              <a href="#">RENT TRACTOR</a>
              <a href="#">RENT GOODS VEHICLE</a>
              <a href="#">RENT HARVESTER</a>
              <a href="#">RENT IMPLEMENTS</a>
            </div>
            <p className="text-2xl uppercase text-white my-5">useful links</p>
            <div className="rent__links text-white">
              <a href="#">CONTACT US</a>
              <a href="#">ABOUT US</a>
              <a href="#">PRIVACY POLICY</a>
              <a href="#">TERMS OF USE</a>
              <a href="#">DATA PRIVACY</a>
            </div>
          </div>
        </div>
        <hr className="w-[90%] mx-auto my-10 h-[2px] bg-whitesmoke opacity-50" />
        <div className="container flex justify-between items-center md:flex-row flex-col gap-3">
            <img src={makeInIndia} alt="make in india logo" width={100} className="invert"/>
            <p className="text-white text-center">Copyright © 2023-24 | ABYBABY E-COM PRIVATE LIMITED | ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </>
  );
};

export default FooterMenus;
