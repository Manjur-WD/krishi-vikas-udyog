import { useQuery } from "@tanstack/react-query";
import Footer from "../components/layouts/Footer/Footer";
import Header from "../components/layouts/Header/Header";
import MobileScreenNav from "../components/layouts/Header/MobileScreenNav";
import { getCompanyProduct } from "../services/api";
import iffcoLogo from "../assets/images/IFFCO-LOGO.jpg";
import Preloader from "../components/elements/Preloader";
import breadcrumbImage from "../assets/images/img_hero.jpg";
import { FaChevronRight } from "react-icons/fa6";

const IffcoProductsPage = () => {
  const { data: iffcoProducts, isLoading } = useQuery({
    queryKey: ["iffco-product"],
    queryFn: () => getCompanyProduct(1),
  });

  //   console.log(iffcoProducts);

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
              Company Product
            </p>
          </div>
          <p
            className="text-lightgreen md:text-6xl text-4xl font-bold text-center mt-3 uppercase"
            style={{ textShadow: "0 0 15px black" }}
          >
            Iffco Product
          </p>
        </div>
      </section>
      <main className="iffco-product-page container my-5">
        {isLoading ? (
          <Preloader />
        ) : (
          <section className="iffco-products p-5 grid lg:grid-cols-4 grid-cols-2 md:px-5 gap-x-5">
            {iffcoProducts &&
              iffcoProducts.map((item) => (
                <div
                  className="iffco-product-card rounded-3xl overflow-hidden bg-white shadow mb-4 flex flex-col justify-between hover:scale-95 transition-[0.3s]"
                  key={item.id}
                >
                  <img
                    src={item.product_image}
                    alt="iffco-image"
                    className="md:h-[300px] h-[150px] w-full object-contain object-center p-5"
                  />
                  <div className="iffco-logo text-end px-5">
                    <img
                      src={iffcoLogo}
                      alt="this is iffco logo"
                      className="md:w-[80px] w-[60px] ms-auto"
                    />
                  </div>
                  <p className="md:text-md mt-3 text-sm text-center bg-lightdark text-white px-4 py-4 iffco-product-title truncate">
                    {item.product_name}
                  </p>
                </div>
              ))}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default IffcoProductsPage;
