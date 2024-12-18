import { useQuery } from "@tanstack/react-query";
import Footer from "../components/layouts/Footer/Footer";
import Header from "../components/layouts/Header/Header";
import MobileScreenNav from "../components/layouts/Header/MobileScreenNav";
import { getCompanyDealers, getCompanyProduct } from "../services/api";
import iffcoLogo from "../assets/images/IFFCO-LOGO.jpg";
import Preloader from "../components/elements/Preloader";
import breadcrumbImage from "../assets/images/img_hero.jpg";
import { FaChevronRight } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";
import { IoMdCall } from "react-icons/io";
import { FaHouseLaptop } from "react-icons/fa6";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { FiChevronsLeft } from "react-icons/fi";
import { FiChevronsRight } from "react-icons/fi";
import { data } from "autoprefixer";
import { useContext } from "react";
import { IffcoDataContext } from "../context/IffcoData/IffcoDataContext";

const IffcoDealersPage = () => {
  
  const { iffcoDealerData } = useContext(IffcoDataContext);
  
  const { data: iffcoDealers, isLoading } = useQuery({
    queryKey: ["iffco-dealers", data],
    queryFn: () => getCompanyDealers(1),
    enabled: iffcoDealerData.length === 0
  });

  const finalIffcoDealer = iffcoDealerData || iffcoDealers;


  let contacts_per_page = 22;

  let total_pages = 2266;

  const chunksDealers = finalIffcoDealer ? finalIffcoDealer.slice(0, contacts_per_page) : [];
  const handlePageClick = (data) => {
    console.log(data);
    // console.log(iffcoDealers.length);
  };

  return (
    <>
      <Header />
      <MobileScreenNav />
      <section
        className="breadcrumb flex justify-center items-center md:h-[300px] h-[200px]"
        style={{
          backgroundImage: `linear-gradient(#13693a, #13693a6e),url(${breadcrumbImage})`,
          backgroundSize: "cover", // Ensures the image covers the entire section
          backgroundPosition: "center", // Centers the image
        }}
      >
        <div className="breadcrumb-content">
          <div className="breadcrumb-links flex justify-center items-center text-2xl text-white">
            <p className="hover:text-lightgreen px-3">Home</p>
            <FaChevronRight />
            <p className="hover:text-lightgreen px-3 capitalize">
              Company Dealer
            </p>
          </div>
          <p
            className="text-lightgreen md:text-6xl text-4xl font-bold text-center mt-3 uppercase"
            style={{ textShadow: "0 0 15px black" }}
          >
            Iffco Dealer
          </p>
        </div>
      </section>

      <section className="dealer-wrapper">
        {isLoading ? (
          <Preloader />
        ) : (
          <div className="container">
            <div className="iffco-dealer-list grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-5 place-content-center">
              {chunksDealers &&
                chunksDealers.map((item, idx) => (
                  <div
                    className="dealer-card bg-white flex gap-5 shadow rounded-3xl hover:scale-105 transition-[0.5s]"
                    key={idx}
                  >
                    <img
                      src={iffcoLogo}
                      alt="iffco-logo"
                      className="w-[100px] p-2 object-contain"
                    />
                    <div className="dealer-details w-full text-center">
                      <p className="uppercase text-start py-3">
                        <FaHouseLaptop className="inline me-2 " />
                        {item.name}
                      </p>
                      {item.address ? (
                        <p className="text-start text-sm bg-whitesmoke p-3">
                          <GrMapLocation className="inline" /> {item.address}
                        </p>
                      ) : null}
                      <Link
                        to={`tel:${item.mobile}`}
                        className="py-2 shadow-lg px-5 text-white my-3 rounded-3xl md:text-xl text-sm bg-gradient-green inline-flex items-center animate-pulse"
                      >
                        <IoMdCall className="inline me-3" />
                        CALL NOW
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </section>

      <div className="pagination-iffco-dealer my-5">
        <ReactPaginate
          breakLabel="..."
          nextLabel={<FiChevronsRight />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={total_pages}
          previousLabel={<FiChevronsLeft />}
          renderOnZeroPageCount={null}
        />
      </div>

      <Footer />
    </>
  );
};

export default IffcoDealersPage;
