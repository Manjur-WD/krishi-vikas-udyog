import { useEffect, useState } from "react";
import { getWeatherData } from "../../../services/api";
import { useQuery } from "@tanstack/react-query";

const WeatherSection = () => {

  const now = new Date();

  // Get the day of the week (e.g., "Monday", "Tuesday", etc.)
  const dayOfWeek = now.toLocaleString("en-US", { weekday: "long" });

  // Get the current time in HH:MM:SS format
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  console.log(`Today is ${dayOfWeek} and the current time is ${time}`);

  const { data: weatherData } = useQuery({
    queryKey: ["weather-data"],
    queryFn: () => getWeatherData(700091, "22.515310", "88.348038", "20"),
  });

  const [weatherIcon, setWeatherIcon] = useState("");
  const [weatherStatus, setWeatherStatus] = useState("");
  const [currentTemp, setCurrentTemp] = useState("");
  const [currentCity, setCurrentCity] = useState("");

  useEffect(() => {
    if (weatherData) {
      setWeatherIcon(weatherData.data.current[0].icon);
      setWeatherStatus(weatherData.data.current[0].main);
      setCurrentTemp(weatherData.data.current[0].temp);
      setCurrentCity(weatherData.data.city_name);
    }
  }, [weatherData]);

  //   console.log(weatherData.data.current[0].icon);

  return (
    <>
      <section className="weather-section-homepage bg-weatherHomepage bg-cover bg-center">
        <div className="container grid grid-cols-2">
          <div className="current-status-weather flex">
            <img src={weatherIcon} alt="weather-icon" className="w-[200px]" />
            <div className="w-current-details">
              <p className="text-white text-2xl shadow-lg font-semibold">
                {weatherStatus}
              </p>
              <p className="text-7xl font-bold text-white">
                {currentTemp}
                <span className="ms-2">°C</span>
              </p>
              <p className="text-2xl text-white">{dayOfWeek}</p>
              <p className="text-2xl text-white">{time}</p>
            </div>
          </div>
          <div className="additionals-weather"></div>
        </div>
      </section>
    </>
  );
};

export default WeatherSection;
