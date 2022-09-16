import React, { useState } from "react";
import "./Weather.css";
import "./WeatherForecast.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState({ loaded: false });

  function handleForecast(response) {
    console.log(response.data.daily[0].weather[0].icon);
    //console.log(response.data.daily[0].temp);

    setForecastData({
      date: new Date(response.data.daily[0].dt * 1000),
      minTemperature: Math.round(response.data.daily[0].temp.min),
      maxTemperature: Math.round(response.data.daily[0].temp.max),
      icon: response.data.daily[0].weather[0].icon,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`,
    });

    setLoaded(true);
  }

  if (loaded) {
    //console.log(forecastData);

    return (
      <div className="weather-forecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecastData} />
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
