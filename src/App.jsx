import { useState, useEffect } from "react";

import "./App.css";
import SearchWeatherComponent from "./components/SearchWeatherComponent";
import MainWeatherComponent from "./components/MainWeatherComponent";
import { getCurrentWeatherData } from "./services/api";
// {
//   name: currentCity,
//   weather: [{ description: "loading", icon: "01d" }],
//   main: { temp: 273 },
// }
function App() {
  const [currentCity, setCurrentCity] = useState("Nyeri");
  const [searchText, setSearchText] = useState("");
  const [currentWeatherData, setCurrentWeatherData] = useState();
  const [severalDaysOfForecast, setSeveralDaysOfForecast] = useState();
  const [loading, setLoading] = useState(true);

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
      setLoading(true);
    }
  };

  useEffect(() => {
    getCurrentWeatherData(currentCity)
      .then((data) => {
        setCurrentWeatherData((prevData) => data.currentWeatherData);
        setSeveralDaysOfForecast((prevData) => data.severalDaysOfForecast);
        // Terminate loading 
        setLoading(false);
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
      <MainWeatherComponent
        currentWeatherData={currentWeatherData}
        severalDaysOfForecast={severalDaysOfForecast}
        loading={loading}
      />
    </div>
  );
}

export default App;
