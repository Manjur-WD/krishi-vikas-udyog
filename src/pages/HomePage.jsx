import AgriInputsProductSlider from "../components/layouts/Homepage/AgriInputsProductSlider";
import CategorySection from "../components/layouts/Homepage/CategorySection";
import CategoryWiseProductCarousel from "../components/layouts/Homepage/CategoryWiseProductCarousel";
import GoodVehiclesProductSlider from "../components/layouts/Homepage/GoodVehiclesProductSlider";
import HarvesterProductCarousel from "../components/layouts/Homepage/HarvesterProductCarousel";
import HeroBannerCarousel from "../components/layouts/Homepage/HeroBannerCarousel";
import IffcoBanner from "../components/layouts/Homepage/IffcoBanner";
import ImplementsProductsSlider from "../components/layouts/Homepage/ImplementsProductsSlider";
import RentSellSection from "../components/layouts/Homepage/RentSellSection";
import TractorProductSLider from "../components/layouts/Homepage/TractorProductSLider";
import TyreProductsSlider from "../components/layouts/Homepage/TyreProductsSlider";
import VideoSection from "../components/layouts/Homepage/VideoSection";
import WeatherSection from "../components/layouts/Homepage/WeatherSection";

const HomePage = () => {
  return (
    <>
      <section className="hero-section w-full">
        <HeroBannerCarousel />
        <CategorySection />
        <TractorProductSLider />
        <VideoSection />
        <GoodVehiclesProductSlider />
        <RentSellSection />
        <AgriInputsProductSlider />
        <IffcoBanner />
        <HarvesterProductCarousel />
        <WeatherSection />
        <ImplementsProductsSlider />
        <TyreProductsSlider />
      </section>
    </>
  );
};

export default HomePage;
