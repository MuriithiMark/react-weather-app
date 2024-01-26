import React from 'react'
import "./MainWeatherComponent.css";
import CurrentWeatherComponent from '../CurrentWeatherComponent';
import WeatherCardList from '../WeatherCardListComponent';

const MainWeatherComponent = ({weatherData}) => {
  return (
    <div className="main-weather-component">
        <CurrentWeatherComponent />
        <WeatherCardList />
    </div>
  )
}

export default MainWeatherComponent