import React from "react";
import "./WeatherCard.css";

const WeatherCardComponent = ({ dailyWeather }) => {
  const { day, weatherImage, temperature } = dailyWeather;
  return (
    <div className="weather-card-component">
      <span className="__day">{day}</span>
      <img src={weatherImage} alt="" />
      <span>{temperature}</span>
    </div>
  );
};

export default WeatherCardComponent;
