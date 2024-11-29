import { useQuery } from "@tanstack/react-query";
import Preloader from "../../elements/Preloader";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { loadHeroSlides } from "../../../services/api";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HeroBannerCarousel = () => {
  // Use useQuery to fetch data
  const {
    data: heroSlides,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["heroSlides", 1], // Unique key for this query
    queryFn: () => loadHeroSlides(1), // Pass a function reference
  });

  // If data is still loading
  if (isLoading) {
    return <Preloader />;
  }

  // If there's an error
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="slider-container overflow-hidden relative lg:px-5 px-2">
        <Swiper
          loop={true} // Enable infinite loop
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".custom-next", // Custom next button class
            prevEl: ".custom-prev", // Custom prev button class
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id} className="md:p-5 py-3">
              <img
                src={slide.value}
                alt="this is banner slide"
                className="w-full md:h-[668px] h-[200px] object-top md:rounded-3xl rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="custom-prev md:block hidden absolute top-1/2 z-20 -translate-y-1/2 left-3 cursor-pointer">
          <MdChevronLeft />
        </div>
        <div className="custom-next md:block hidden absolute top-1/2 z-20 -translate-y-1/2 right-3 cursor-pointer">
          <MdChevronRight />
        </div>
      </div>
    </>
  );
};

export default HeroBannerCarousel;
