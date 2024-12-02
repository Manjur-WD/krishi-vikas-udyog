import { useEffect, useState } from "react";
import { getWeatherData } from "../../../services/api";
import { useQuery } from "@tanstack/react-query";
import humidity from "../../../assets/humidity.svg";
import airpressure from "../../../assets/airpressure.svg";
import feelslike from "../../../assets/feelslike.svg";
import windspeed from "../../../assets/windspeed.svg";
import weatherHomepage from "../../../assets/images/short_weather_report.webp";

const WeatherSection = () => {
  const now = new Date();
  console.log(now);

  // Get the day of the week (e.g., "Monday", "Tuesday", etc.)
  const dayOfWeek = now.toLocaleString("en-US", { weekday: "long" });

  const date = now.toLocaleDateString("en-GB");

  const { data: weatherData } = useQuery({
    queryKey: ["weather-data"],
    queryFn: () => getWeatherData(700091, "22.515310", "88.348038", "20"),
  });

  // console.log(weatherData.data.current[0].icon);
  
  return (
    <>
      <section className="weather-section-homepage p-5" style={{background: `linear-gradient(rgba(0, 0, 0, 0.356), rgba(0, 0, 0, 0.37)),url(${weatherHomepage}) no-repeat center/cover`}}>
        <div className="container flex lg:flex-row flex-col md:gap-10 gap-5 items-center justify-center">
          <div className="current-status-weather flex md:gap-5 md:flex-row flex-col justify-center items-center">
            <img
              src={weatherData ? weatherData.data.current[0].icon : null}
              alt="weather-icon"
              className="w-[150px]  drop-shadow-2xl -mt-[50px]"
            />
            <div className="w-current-details md:text-start text-center">
              <p className="text-white text-2xl  font-semibold">{weatherData ? weatherData.data.current[0].main : null}</p>
              <p className="text-xl text-white">{dayOfWeek}</p>
              <p className="text-xl text-white font-light">{date}</p>
              <p className="text-7xl font-bold text-white">
                {weatherData ? weatherData.data.current[0].temp : null}
                <span className="ms-2">°C</span>
              </p>
            </div>
          </div>
          <div className="additionals-weather text-white text-nowrap  flex md:flex-row flex-wrap justify-center">
            <div className="additional-weather-data-box md:border-r md:p-5 p-2">
              <p className="text-xl text-white uppercase">
                <img
                  src={humidity}
                  alt="icon of weather"
                  className="invert inline me-2"
                />
                humidity
              </p>
              <p className="text-2xl text-center">
                {weatherData ? weatherData.data.current[0].humidity : null}
              </p>
            </div>
            <div className="additional-weather-data-box md:border-r md:p-5 p-2 " >
              <p className="text-xl text-white uppercase">
                <img
                  src={airpressure}
                  alt="icon of weather"
                  className="invert inline me-2"
                />
                air pressure
              </p>
              <p className="text-2xl text-center">{weatherData ? weatherData.data.current[0].pressure : null}</p>
            </div>
            <div className="additional-weather-data-box md:border-r md:p-5 p-2">
              <p className="text-xl text-white uppercase">
                <img
                  src={feelslike}
                  alt="icon of weather"
                  className="invert inline me-2"
                />
                feels like
              </p>
              <p className="text-2xl text-center">{weatherData ? weatherData.data.current[0].feels_like : null}°C</p>
            </div>
            <div className="additional-weather-data-box  md:p-5 p-2">
              <p className="text-xl text-white uppercase">
                <img
                  src={windspeed}
                  alt="icon of weather"
                  className="invert inline me-2"
                />
                wind speed
              </p>
              <p className="text-2xl text-center">{weatherData ? weatherData.data.current[0].wind_speed : null}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeatherSection;
