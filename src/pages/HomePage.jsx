import AgriInputsProductSlider from "../components/layouts/Homepage/AgriInputsProductSlider";
import CategorySection from "../components/layouts/Homepage/CategorySection";
import CategoryWiseProductCarousel from "../components/layouts/Homepage/CategoryWiseProductCarousel";
import GoodVehiclesProductSlider from "../components/layouts/Homepage/GoodVehiclesProductSlider";
import HarvesterProductCarousel from "../components/layouts/Homepage/HarvesterProductCarousel";
import HeroBannerCarousel from "../components/layouts/Homepage/HeroBannerCarousel";
import ImplementsProductsSlider from "../components/layouts/Homepage/ImplementsProductsSlider";
import TractorProductSLider from "../components/layouts/Homepage/TractorProductSLider";
import TyreProductsSlider from "../components/layouts/Homepage/TyreProductsSlider";

const HomePage = () => {
  return (
    <>
      <section className="hero-section w-full">
        <HeroBannerCarousel />
        <CategorySection />
        <TractorProductSLider />
        <GoodVehiclesProductSlider />
        <AgriInputsProductSlider />
        <HarvesterProductCarousel />
        <ImplementsProductsSlider />
        <TyreProductsSlider />
      </section>
    </>
  );
};

export default HomePage;
