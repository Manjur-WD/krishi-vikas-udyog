import { useEffect, useState } from "react";
import { getWeatherData } from "../../../services/api";
import { useQuery } from "@tanstack/react-query";
import humidity from "../../../assets/humidity.svg";
import airpressure from "../../../assets/airpressure.svg";
import feelslike from "../../../assets/feelslike.svg";
import windspeed from "../../../assets/windspeed.svg";



const WeatherSection = () => {

  const now = new Date();
  console.log(now);


  // Get the day of the week (e.g., "Monday", "Tuesday", etc.)
  const dayOfWeek = now.toLocaleString("en-US", { weekday: "long" });

  // Get the current date in day-month-year format
  const date = now.toLocaleDateString("en-GB");

  // console.log(`Today is ${dayOfWeek} and the current time is ${date}`);

  const { data: weatherData } = useQuery({
    queryKey: ["weather-data"],
    queryFn: () => getWeatherData(700091, "22.515310", "88.348038", "20"),
  });

  const [weatherIcon, setWeatherIcon] = useState("");
  const [weatherStatus, setWeatherStatus] = useState("");
  const [currentTemp, setCurrentTemp] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [humidity, setHumidity] = useState("");
  const [airpressure, setAirpressure] = useState("");
  const [feelslikw, setFeelslike] = useState("");
  const [windspeed, setwindSpeed] = useState("");

  useEffect(() => {
    if (weatherData) {
      setWeatherIcon(weatherData.data.current[0].icon);
      setWeatherStatus(weatherData.data.current[0].main);
      setCurrentTemp(weatherData.data.current[0].temp);
      setCurrentCity(weatherData.data.city_name);
      setHumidity(weatherData.data.current[0].humidity);
      setAirpressure(weatherData.data.current[0].pressure);
      setFeelslike(weatherData.data.current[0].feels_like);
      setwindSpeed(weatherData.data.current[0].wind_speed);
    }
  }, [weatherData]);

  //   console.log(weatherData.data.current[0].icon);

  return (
    <>
      <section className="weather-section-homepage bg-weatherHomepage bg-cover bg-center">
        <div className="container grid md:grid-cols-2 grid-cols-1">
          <div className="current-status-weather flex nd:gap-5 md:flex-row flex-col justify-center items-center">
            <img src={weatherIcon} alt="weather-icon" className="w-[150px]  drop-shadow-2xl -mt-[50px]" />
            <div className="w-current-details md:text-start text-center">
              <p className="text-white text-2xl shadow-lg font-semibold">
                {weatherStatus}
              </p>
              <p className="text-xl text-white">{dayOfWeek}</p>
              <p className="text-xl text-white font-light">{date}</p>
              <p className="text-7xl font-bold text-white">
                {currentTemp}
                <span className="ms-2">°C</span>
              </p>

            </div>
          </div>
          <div className="additionals-weather grid md:grid-cols-4 grid-cols-2">
            <div className="additional-weather-data-box">
              <p className="text-xl text-white uppercase"><img src={humidity} alt="icon of weather" className="invert inline me-2" />humidity</p>
              <p className="text-2xl font-bold">
                {humidity}
              </p>
            </div>
            <p><img src={humidity} alt="icon of weather" className="invert" />humidity</p>
              <p><img src={humidity} alt="icon of weather" className="invert" />humidity</p>
              <p><img src={humidity} alt="icon of weather" className="invert" />humidity</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeatherSection;
