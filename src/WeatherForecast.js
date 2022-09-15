import React from "react";
import "./Weather.css";
import "./WeatherForecast.css";
import "bootstrap/dist/css/bootstrap.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecst(props) {
  return (
    <div className="weather-forecast">
      <div className="row">
        <div className="col">
          <div className="weather-forecast-day">Fri</div>

          <WeatherIcon code="09d" size={40} />

          <div className="min-max-temperature">
            <span className="min-temperature">19°</span> |{" "}
            <span className="max-temperature">34°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
