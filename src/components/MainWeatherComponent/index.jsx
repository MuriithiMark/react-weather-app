import React from "react";
import "./MainWeatherComponent.css";
import CurrentWeatherComponent from "../CurrentWeatherComponent";
import WeatherCardList from "../WeatherCardListComponent";
import { loadingGif } from "../../assets";

const MainWeatherComponent = ({
  currentWeatherData,
  severalDaysOfForecast,
  loading
}) => {

  const loadingStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div
      className="main-weather-component"
      style={loading ? loadingStyles : {}}
    >
      {!loading ? (
        <>
          <CurrentWeatherComponent currentWeatherData={currentWeatherData} />
          <WeatherCardList />
        </>
      ) : (
        <img className="loading" src={loadingGif} alt="loadingGif" />
      )}
    </div>
  );
};

export default MainWeatherComponent;
