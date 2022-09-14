import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import FormattedDate from "./FormattedDate";

export default function ApiData(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>

      <ul>
        <FormattedDate date={props.data.date} />
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="main-icon"
          />

          <span className="temperature">{props.data.temperature}</span>
          <span className="unit">°C</span>
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
