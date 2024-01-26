import React from "react";
import "./SearchWeatherComponent.css";
import { useState } from "react";

const SearchWeatherComponent = ({ searchText, onChange, onKeyDown }) => {
  return (
    <div className="search-weather-component">
      <input
        type="text"
        value={searchText}
        placeholder="Enter a city ..."
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default SearchWeatherComponent;
