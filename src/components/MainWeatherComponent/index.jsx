import React from 'react'
import "./MainWeatherComponent.css";
import CurrentWeatherComponent from '../CurrentWeatherComponent';
import WeatherCardList from '../WeatherCardListComponent';

const MainWeatherComponent = ({currentWeatherData}) => {
  console.log('Current Weather Data ', currentWeatherData)
  return (
    <div className="main-weather-component">
        <CurrentWeatherComponent currentWeatherData={currentWeatherData} />
        <WeatherCardList />
    </div>
  )
}

export default MainWeatherComponent