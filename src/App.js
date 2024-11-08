import React, { useState } from "react";
import { fetchWeather } from "./api/fetchWeather";
import "./App.css";
const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery("");
      console.log(data.weather[0].description);
    }
  };
  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={search}
      />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              alt="weather status icon"
              className="city-icon"
              src={` https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
