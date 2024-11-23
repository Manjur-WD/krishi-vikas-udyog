import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";

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
        cssEase: "linear"
      };

  const [heroSlides, setHeroSlide] = useState([]);

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
    setHeroSlide(response.data.result.response);
  };

  console.log(heroSlides);

  useEffect(() => {
    loadHeroSlides();
  }, []);

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
