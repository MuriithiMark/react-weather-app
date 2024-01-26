import React from "react";
import "./WeatherCard.css";
import WeatherIcons from "../../assets";

const WeatherCardComponent = ({ dailyWeather }) => {
  const { day, icon, temperature } = dailyWeather;
  return (
    <div className="weather-card-component">
      <span className="__day">{day}</span>
      <img src={WeatherIcons.get(icon)} alt="" />
      <span>{temperature}&#176;C</span>
    </div>
  );
};

export default WeatherCardComponent;
