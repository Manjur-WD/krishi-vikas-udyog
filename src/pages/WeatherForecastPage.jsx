import { useQuery } from "@tanstack/react-query";
import weatherHomepage from "../assets/images/short_weather_report.webp";
import { getWeatherData } from "../services/api";
import Header from "../components/layouts/Header/Header";
import MobileScreenNav from "../components/layouts/Header/MobileScreenNav";
import Footer from "../components/layouts/Footer/Footer";
import sunrise from "../assets/weather-icons/sunrise.svg";
import sunset from "../assets/weather-icons/sunset.svg";
import thermometer from "../assets/weather-icons/thermometer.svg";
import barometer from "../assets/weather-icons/barometer.svg";
import humidity from "../assets/weather-icons/humidity.svg";
import wind from "../assets/weather-icons/wind.svg";
import { FaMapLocationDot } from "react-icons/fa6";

const WeatherForecastPage = () => {
  const { data: weatherData } = useQuery({
    queryKey: ["weather-data"],
    queryFn: () => getWeatherData(722205, "22.515310", "88.348038", "20"),
  });

  console.log(weatherData);

  return (
    <>
      <Header />
      <MobileScreenNav />
      <section
        className="weather-section-homepage p-5"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.356), rgba(0, 0, 0, 0.37)),url(${weatherHomepage}) no-repeat center/cover`,
        }}
      >
        <div className="container">
          <div className="weather-container-wrapper grid grid-cols-3">
            <div className="weather-shortcut grid grid-cols-2">
              <figure className="icons-and-desc flex items-center">
                <img src={sunrise} alt="icon" width={80} />
                <figcaption>
                  <p className="text-sm font-semibold text-white">SUNRISE</p>
                  <p className="text-lg text-white">
                    {weatherData?.data?.current[0]?.sunrise}
                  </p>
                </figcaption>
              </figure>
              <figure className="icons-and-desc flex items-center">
                <img src={sunset} alt="icon" width={80} />
                <figcaption>
                  <p className="text-sm font-semibold text-white">SUNSET</p>
                  <p className="text-lg text-white">
                    {weatherData?.data?.current[0]?.sunset}
                  </p>
                </figcaption>
              </figure>
              <figure className="icons-and-desc flex items-center">
                <img src={thermometer} alt="icon" width={80} />
                <figcaption>
                  <p className="text-sm font-semibold text-white">FEELS LIKE</p>
                  <p className="text-lg text-white">
                    {weatherData?.data?.current[0]?.feels_like}°C
                  </p>
                </figcaption>
              </figure>
              <figure className="icons-and-desc flex items-center">
                <img src={barometer} alt="icon" width={80} />
                <figcaption>
                  <p className="text-sm font-semibold text-white">
                    AIR PRESSURE
                  </p>
                  <p className="text-lg text-white">
                    {weatherData?.data?.current[0]?.pressure}
                  </p>
                </figcaption>
              </figure>
              <figure className="icons-and-desc flex items-center">
                <img src={humidity} alt="icon" width={80} />
                <figcaption>
                  <p className="text-sm font-semibold text-white">HUMIDITY</p>
                  <p className="text-lg text-white">
                    {weatherData?.data?.current[0]?.humidity}
                  </p>
                </figcaption>
              </figure>
              <figure className="icons-and-desc flex items-center">
                <img src={wind} alt="icon" width={80} />
                <figcaption>
                  <p className="text-sm font-semibold text-white">WIND SPEED</p>
                  <p className="text-lg text-white">
                    {weatherData?.data?.current[0]?.wind_speed}
                  </p>
                </figcaption>
              </figure>
            </div>
            <div
              className="weather-temperature-main rounded-[50px] py-10"
              style={{
                background: "linear-gradient(45deg, #000000c7, transparent)",
              }}
            >
              <img
                src={weatherData?.data?.current[0]?.icon}
                alt="weather condition icon"
                className="w-[100px] mx-auto"
              />
              <p className="main-status text-2xl capitalize text-white text-center">
                {weatherData?.data?.current[0]?.description}
              </p>
              <p className="text-center font-bold text-6xl text-white mt-4">
                {weatherData?.data?.current[0]?.temp}°C
              </p>
              <p className="text-center text-xl  text-white mt-4">
                <FaMapLocationDot className="inline" /> {weatherData?.city_name}
              </p>
            </div>
          </div>

          <div className="ten-days-forecast flex gap-5 xl:justify-center justify-start mt-10 overflow-auto py-3">
            {weatherData?.data?.days.map((item, idx) => (
              <div className="forecast-box text-center flex-shrink-0 p-6 text-white rounded-3xl" key={idx} style={{
                background: "linear-gradient(45deg, #000000c7, transparent)",
              }}>
                <img src={item.icon} alt="status icon" width={50} />
                <p className="day-status">{item.weather}</p>
                <p className="day-temp">{item.temp}°C</p>
                <p className="day-name"></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WeatherForecastPage;
