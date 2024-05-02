import React, { useState } from "react";
import "./WeatherApp.css";

import searchIcon from "../Assets/search.png";
import clearIcon from "../Assets/clear.png";
import cloudIcon from "../Assets/cloud.png";
import drizzleIcon from "../Assets/drizzle.png";
import rainIcon from "../Assets/rain.png";
import snowIcon from "../Assets/snow.png";
import windIcon from "../Assets/wind.png";
import humidityIcon from "../Assets/humidity.png";

const WeatherApp = () => {
  let api_key = "8603e41f1765806be2a9ff5098d91a52";
  // WiCon UseState Function
  const [wicon, setWicon] = useState(cloudIcon);
  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    // Get Class Name Variables Data
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    // Change Inner HTML
    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = data.wind.speed + " km/h";
    temperature[0].innerHTML = data.main.temp + "°C";
    location[0].innerHTML = data.name;
    // Icon Set
    if (data.weather[0].icon === "01n" || data.weather[0].icon === "01n") {
      setWicon(clearIcon);
    } else if (
      data.weather[0].icon === "02n" ||
      data.weather[0].icon === "02n"
    ) {
      setWicon(cloudIcon);
    } else if (
      data.weather[0].icon === "03n" ||
      data.weather[0].icon === "03n"
    ) {
      setWicon(drizzleIcon);
    } else if (
      data.weather[0].icon === "04n" ||
      data.weather[0].icon === "04n"
    ) {
      setWicon(drizzleIcon);
    } else if (
      data.weather[0].icon === "09n" ||
      data.weather[0].icon === "09n"
    ) {
      setWicon(rainIcon);
    } else if (
      data.weather[0].icon === "10n" ||
      data.weather[0].icon === "10n"
    ) {
      setWicon(rainIcon);
    } else if (
      data.weather[0].icon === "13n" ||
      data.weather[0].icon === "13n"
    ) {
      setWicon(snowIcon);
    } else {
      setWicon(clearIcon);
    }
  };
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={searchIcon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidityIcon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windIcon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
