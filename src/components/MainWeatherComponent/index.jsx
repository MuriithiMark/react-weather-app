import React from "react";
import "./MainWeatherComponent.css";
import CurrentWeatherComponent from "../CurrentWeatherComponent";
import WeatherCardList from "../WeatherCardListComponent";
import { loadingGif } from "../../assets";

const getDay = (dt_txt) => {
  const dayPosition = new Date(dt_txt).getDay();
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return daysOfTheWeek[dayPosition];
};

const MainWeatherComponent = ({ currentWeatherData }) => {
  const today = currentWeatherData.list[0];
  const dailyWeatherList = currentWeatherData.list.filter(({ dt_txt }) => {
    // Return a list of days with a difference of 24hrs
    const day = new Date(dt_txt);
    let currentHours = new Date(today.dt_txt).getHours();
    const sameTimeDiffDay = day.getHours() === currentHours;
    if (sameTimeDiffDay) return true;
    return false;
  });
  const simplifiedList = dailyWeatherList.slice(1, 5).map((item) => {
    return {
      dt_txt: item.dt_txt,
      day: getDay(item.dt_txt),
      main: item.weather.main,
      icon: item.weather[0].icon,
      temperature: Math.trunc(item.main.temp - 273),
    };
  });

  return (
    <div className="main-weather-component">
      <CurrentWeatherComponent
        currentWeatherData={{ ...today, city: currentWeatherData.city.name }}
      />
      <WeatherCardList dailyWeatherList={simplifiedList} />
    </div>
  );
};

export default MainWeatherComponent;
