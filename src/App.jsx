import { useState, useEffect } from "react";

import "./App.css";
import SearchWeatherComponent from "./components/SearchWeatherComponent";
import MainWeatherComponent from "./components/MainWeatherComponent";
import { getCurrentWeatherData } from "./services/api";

function App() {
  
  const [currentCity, setCurrentCity] = useState("Nyeri");
  const [searchText, setSearchText] = useState("");
  const [currentWeatherData, setCurrentWeatherData] = useState({
    name: currentCity,
    weather: [{ description: 'loading', icon: "01d"}],
    main: { temp: 273 }
  });

  /**
   *
   * @param {Event} event
   */
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  /**
   *
   * @param {KeyboardEvent} event
   * Start Search when enter key is pressed
   */
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setCurrentCity(searchText);
    }
  };

  useEffect(() => {
    console.log(currentCity);
    getCurrentWeatherData(currentCity)
      .then((currentWeatherData) => {
        setCurrentWeatherData((prevData) => currentWeatherData);
      })
      // TODO handle error in the UI
      .catch((error) => console.error(error));
  }, [currentCity]);

  return (
    <div className="app">
      <SearchWeatherComponent
        searchText={searchText}
        onChange={handleSearchTextChange}
        onKeyPress={handleKeyPress}
      />
      <MainWeatherComponent currentWeatherData={currentWeatherData} />
    </div>
  );
}

export default App;
