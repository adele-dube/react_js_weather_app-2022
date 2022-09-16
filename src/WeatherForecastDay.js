import React, { useState } from "react";
import "./Weather.css";
import "./WeatherForecast.css";
import "bootstrap/dist/css/bootstrap.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecstDay(props) {
  function day() {
    let date = new Date(props.data.date);
    let day = date.getDay();

    let shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return shortDays[day];
  }

  return (
    <div>
      <div className="weather-forecast-day">{day()}</div>

      <WeatherIcon code={props.data.icon} size={40} />

      <div className="min-max-temperature">
        <span className="min-temperature">{props.data.minTemperature}°</span> |{" "}
        <span className="max-temperature">{props.data.maxTemperature}°</span>
      </div>
    </div>
  );
}
