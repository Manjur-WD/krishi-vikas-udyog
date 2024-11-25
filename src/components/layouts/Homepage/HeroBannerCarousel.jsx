import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Preloader from "../../elements/Preloader";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HeroBannerCarousel = () => {
  const loadHeroSlides = async () => {
    const response = await axios.post(
      "https://krishivikas.com/api/v2/home-banner",
      {
        lang_id: 2,
      },
      {
        headers: {
          Authorization:
            "Bearer 30609|IxX5Do8U2HvxfCTAhJimtbTXzExMHb97QejGeMjXe885fa10",
        },
      }
    );
    return response.data.result.response;
  };

  // Use useQuery to fetch data
  const {
    data: heroSlides,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["heroSlides"], // Unique key for this query
    queryFn: loadHeroSlides, // Function to fetch the data
  });

  // If data is still loading
  if (isLoading) {
    return <Preloader />;
  }

  // If there's an error
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // Swiper navigation hook reference
  // let swiperRef = null;

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
          // onInit={(swiper) => {
          //   swiperRef = swiper;
          // }}
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id} className="p-5">
              <img
                src={slide.value}
                alt="this is banner slide"
                className="w-full h-[668px] object-cover object-top rounded-3xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="custom-prev absolute top-1/2 z-20 -translate-y-1/2 left-3 cursor-pointer">
          <MdChevronLeft />
        </div>
        <div className="custom-next absolute top-1/2 z-20 -translate-y-1/2 right-3 cursor-pointer">
          <MdChevronRight />
        </div>
      </div>
    </>
  );
};

export default HeroBannerCarousel;
