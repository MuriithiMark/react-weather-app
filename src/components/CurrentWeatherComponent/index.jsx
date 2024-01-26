import React from "react";
import "./CurrentWeatherComponent.css";
import { sun } from "../../assets";

const CurrentWeatherComponent = () => {
  const today = new Date().getDay();
  const { day, location, temperature, weatherStatus, weatherImage } = {
    day: 'Today',
    location: "New York",
    temperature: 21,
    weatherStatus: "clear sky",
    weatherImage: sun,
  };
  return (
    <div className="current-weather-component">
      <img
        src={weatherImage}
        alt=""
        className="current-weather-component__image"
      />
      <div className="current-weather-component__info">
        <span className="__day">{day}</span>
        <span className="__location">{location}</span>
        <span className="__temperature">Temperature: {temperature}&#176;C</span>
        <span className="__weather-status">{weatherStatus}</span>
      </div>
    </div>
  );
};

export default CurrentWeatherComponent;
