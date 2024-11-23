import axios from "axios";
import Slider from "react-slick";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";

const HeroBannerCarousel = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    // autoplaySpeed: 2000,
    cssEase: "linear",
  };

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
    return (
      <>
        <div className="preloader bg-white h-screen w-screen fixed inset-0 flex items-center justify-center">
          <h1>LOADING.....</h1>
        </div>
      </>
    );
  }

  // If there's an error
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="slider-container overflow-hidden">
        <Slider {...settings}>
          {heroSlides.map((slide) => {
            return (
              <>
                <div className="hero-slide p-5 " key={slide.id}>
                  <img
                    src={slide.value}
                    alt="this is banner slide"
                    className="w-full h-[720px] rounded-xl object-cover object-top"
                  />
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default HeroBannerCarousel;
