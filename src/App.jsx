import { useState, useEffect } from "react";

import "./App.css";
import SearchWeatherComponent from "./components/SearchWeatherComponent";
import MainWeatherComponent from "./components/MainWeatherComponent";
import { getCurrentWeatherData } from "./services/api";
import { loadingGif } from "./assets";

function App() {
  const [currentCity, setCurrentCity] = useState("Nyeri");
  const [searchText, setSearchText] = useState("");
  const [currentWeatherData, setCurrentWeatherData] = useState();
  const [loading, setLoading] = useState(true);

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setCurrentCity(searchText);
      setLoading(true);
    }
  };

  useEffect(() => {
    getCurrentWeatherData(currentCity)
      .then((data) => {
        setCurrentWeatherData((prevData) => data);
        // Terminate loading
        if (!!data) setLoading(false);
      })
      // TODO handle error in the UI
      .catch((error) => console.error(error));
  }, [currentCity]);

  return (
    <div className="app">
      <SearchWeatherComponent
        searchText={searchText}
        onChange={handleSearchTextChange}
        onKeyDown={handleKeyDown}
      />
      {!loading ? (
        <MainWeatherComponent
          currentWeatherData={currentWeatherData}
          loading={loading}
        />
      ) : (
        <img src={loadingGif} alt="loading-gif" />
      )}
    </div>
  );
}

export default App;
