import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import MainTemperature from "./MainTemperature";

export default function ApiData(props) {
  return (
    <div className="current-weather-section">
      <h1>{props.data.city}</h1>

      <ul>
        <FormattedDate date={props.data.date} />
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} size={64} className="main-icon" />

          <MainTemperature celcius={props.data.temperature} />
        </div>

        <div className="col-6 weather-details">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
            <li>Pressure: {props.data.pressure}mbar </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
