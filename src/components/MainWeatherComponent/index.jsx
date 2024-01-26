import React from "react";
import "./MainWeatherComponent.css";
import CurrentWeatherComponent from "../CurrentWeatherComponent";
import WeatherCardList from "../WeatherCardListComponent";
import { loadingGif } from "../../assets";

const getDay = (dt_txt) => {
  const dayPosition = new Date(dt_txt).getDay();
  switch (dayPosition) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "ERROR"; // FIXME
  }
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
