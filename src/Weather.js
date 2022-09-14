import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      iconUrl:
        "https://cdn3.iconfinder.com/data/icons/weather-260/200/cloudy_day-1024.png",
      pressure: response.data.main.pressure,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="card" id="main-card">
          <div className="card-body shadow">
            <form>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city..."
                    className="form-control"
                    autoFocus="on"
                  />
                </div>

                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-success w-100 search-button"
                  />
                </div>
              </div>
            </form>

            <h1>Nicosia</h1>

            <ul>
              <FormattedDate date={weatherData.date} />
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>

            <div className="row">
              <div className="col-6">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  className="main-icon"
                />

                <span className="temperature">{weatherData.temperature}</span>
                <span className="unit">°C</span>
              </div>

              <div className="col-6 weather-details">
                <ul>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind}km/h</li>
                  <li>Pressure: {weatherData.pressure}mbar </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "Nicosia";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1a915758c5fb84c9ee7377f6039e76a7&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Searching...";
  }
}
