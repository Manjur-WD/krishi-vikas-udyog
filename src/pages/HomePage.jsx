import CategorySection from "../components/layouts/Homepage/CategorySection";
import HeroBannerCarousel from "../components/layouts/Homepage/HeroBannerCarousel";

const HomePage = () => {
  return (
    <>
      <section className="hero-section w-full">
        <HeroBannerCarousel />
        <CategorySection />
      </section>
    </>
  );
};

export default HomePage;
