import React from "react";
import "./SearchWeatherComponent.css";
import { useState } from "react";

const SearchWeatherComponent = ({ searchText, onChange, onKeyPress }) => {
  return (
    <div className="search-weather-component">
      <input
        type="text"
        value={searchText}
        placeholder="Enter a city ..."
        onChange={onChange}
        onKeyDown={onKeyPress}
      />
    </div>
  );
};

export default SearchWeatherComponent;
