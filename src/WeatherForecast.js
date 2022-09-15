import React, { useState } from "react";
import "./Weather.css";
import "./WeatherForecast.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import WeatherForecstDay from "./WeatherForecastDay";

export default function WeatherForecst(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleForecast(response) {
    // console.log(response.data.daily);

    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);

    return (
      <div className="weather-forecast">
        <div className="row">
          <div className="col">
            <WeatherForecstDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "1a915758c5fb84c9ee7377f6039e76a7";
    let coordinatesLat = props.coordinates.lat;
    let coordinatesLon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinatesLat}&lon=${coordinatesLon}&units=metric&appid=${apiKey}`;

    axios.get(apiUrl).then(handleForecast);

    return null;
  }
}
