import React, { useState } from "react";
import "./Weather.css";
import "./WeatherForecast.css";
import "bootstrap/dist/css/bootstrap.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecstDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return shortDays[day];
  }

  return (
    <div>
      <div className="weather-forecast-day">{day()}</div>

      <WeatherIcon code={props.data.weather[0].icon} size={40} />

      <div className="min-max-temperature">
        <span className="min-temperature">
          {Math.round(props.data.temp.min)}°
        </span>{" "}
        |{" "}
        <span className="max-temperature">
          {Math.round(props.data.temp.max)}°
        </span>
      </div>
    </div>
  );
}
