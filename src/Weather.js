import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  return (
    <div className="container">
      <div class="card" id="main-card">
        <div class="card-body shadow">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control"
                />
              </div>

              <div className="col-3">
                <input
                  type="submit"
                  value="search"
                  className="btn btn-success"
                />
              </div>
            </div>
          </form>

          <h1>Nicosia</h1>

          <ul>
            <li>Wednesday, 17:30</li>
            <li>Partly Cloudy</li>
          </ul>

          <div className="row">
            <div className="col-6">
              <img
                src="https://cdn3.iconfinder.com/data/icons/weather-260/200/cloudy_day-1024.png"
                alt="partly-cloudy icon"
                className="main-icon"
              />

              <div>31°C</div>
            </div>

            <div className="col-6">
              <ul>
                <li>Precipitation: 0%</li>
                <li>Humidity: 47%</li>
                <li>Wind: 19.4km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
