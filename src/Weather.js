import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import ApiData from "./ApiData";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      city: response.data.name,
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

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1a915758c5fb84c9ee7377f6039e76a7&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleInput(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="card" id="main-card">
          <div className="card-body shadow">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city..."
                    className="form-control"
                    autoFocus="on"
                    onChange={handleInput}
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

            <ApiData data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();

    return "Searching...";
  }
}
