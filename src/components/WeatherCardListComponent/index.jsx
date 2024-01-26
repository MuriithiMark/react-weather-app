import React from "react";
import "./WeatherCardListComponent.css";
import { useState } from "react";
import WeatherCardComponent from "../WeatherCardComponent";
import { cloudyThunder, foggy, heavyRain, sun } from "../../assets";

const WeatherCardListComponent = () => {
  const [dailyWeatherList, setDailyWeatherList] = useState([
    {
      day: "Monday",
      weatherImage: sun,
      temperature: 21,
    },
    {
      day: "Tuesday",
      weatherImage: cloudyThunder,
      temperature: 5,
    },
    {
      day: "Wednesday",
      weatherImage: heavyRain,
      temperature: 10,
    },
    {
      day: "Thursday",
      weatherImage: foggy,
      temperature: 14,
    },
  ]);

  return (
    <div className="weather-card-list-component">
      {dailyWeatherList.map((dailyWeather) => (
        <WeatherCardComponent dailyWeather={dailyWeather} key={dailyWeather.day} />
      ))}
    </div>
  );
};

export default WeatherCardListComponent;
