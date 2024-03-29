import React from "react";
import "./CurrentWeatherComponent.css";
import WeatherIcons, { sun } from "../../assets";

const CurrentWeatherComponent = ({ currentWeatherData }) => {
  const {
    city,
    weather: [{ description, icon }],
    main: { temp },
  } = currentWeatherData;

  return (
    <div className="current-weather-component">
      <img
        src={WeatherIcons.get(icon)}
        alt=""
        className="current-weather-component__image"
      />
      <div className="current-weather-component__info">
        <span className="__day">Today</span>
        <span className="__location">{city}</span>
        <span className="__temperature">
          Temperature: {Math.trunc(temp) - 273}&#176;C
        </span>
        <span className="__weather-status">{description}</span>
      </div>
    </div>
  );
};

export default CurrentWeatherComponent;
