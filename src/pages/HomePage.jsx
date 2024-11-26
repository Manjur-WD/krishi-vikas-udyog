import CategorySection from "../components/layouts/Homepage/CategorySection";
import CategoryWiseProductCarousel from "../components/layouts/Homepage/CategoryWiseProductCarousel";
import GoodVehiclesProductSlider from "../components/layouts/Homepage/GoodVehiclesProductSlider";
import HeroBannerCarousel from "../components/layouts/Homepage/HeroBannerCarousel";
import TractorProductSLider from "../components/layouts/Homepage/TractorProductSLider";

const HomePage = () => {
  return (
    <>
      <section className="hero-section w-full">
        <HeroBannerCarousel />
        <CategorySection />
        <TractorProductSLider />
        <GoodVehiclesProductSlider />
        
      </section>
    </>
  );
};

export default HomePage;
