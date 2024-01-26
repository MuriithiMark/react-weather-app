import React from "react";
import "./CurrentWeatherComponent.css";
import WeatherIcons, { sun } from "../../assets";

const CurrentWeatherComponent = ({ currentWeatherData }) => {
  console.log('Hello: ', currentWeatherData)
  const { name, weather: [ { description, icon }], main: { temp } } = currentWeatherData;
  console.log('Name: ', name, ' Weather: ', temp)
  return (
    <div className="current-weather-component">
      <img
        src={WeatherIcons.get(icon)}
        alt=""
        className="current-weather-component__image"
      />
      <div className="current-weather-component__info">
        <span className="__day">Today</span>
        <span className="__location">{name}</span>
        <span className="__temperature">Temperature: {Math.trunc(temp) - 273}&#176;C</span>
        <span className="__weather-status">{description}</span>
      </div>
    </div>
  );
};

export default CurrentWeatherComponent;
