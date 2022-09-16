import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";

//IMPORTANT!!!!
//Temperature Conversion is temporarily disabled for this project
//Units set to Celcius

export default function MainTemperature(props) {
  let [unit, setUnit] = useState("celcius");

  // function showFahrenheit(event) {
  //   event.preventDefault();

  //   setUnit("fahrenheit");
  // }

  function showCelcius(event) {
    event.preventDefault();

    setUnit("celcius");
  }

  // function tempFahrenheit() {
  //   return Math.round((props.celcius * 9) / 5 + 32);
  // }

  if (unit === "celcius") {
    return (
      <span>
        <span className="temperature">{props.celcius}</span>
        <span className="unit">
          °C
          {/* |{" "}
          <a href="/" className="links" onClick={showFahrenheit}>
            °F
          </a> */}
        </span>
      </span>
    );
  } else {
    return (
      <span>
        {/* <span className="temperature">{tempFahrenheit()}</span> */}
        <span className="unit">
          <a href="/" className="links" onClick={showCelcius}>
            °C
          </a>{" "}
          {/* | °F */}
        </span>
      </span>
    );
  }
}
