import React from "react";

import "./WeatherCardListComponent.css";
import WeatherCardComponent from "../WeatherCardComponent";

const WeatherCardListComponent = ({ dailyWeatherList}) => {

  return (
    <div className="weather-card-list-component">
      {dailyWeatherList.map((dailyWeather) => (
        <WeatherCardComponent dailyWeather={dailyWeather} key={dailyWeather.day} />
      ))}
    </div>
  );
};

export default WeatherCardListComponent;
