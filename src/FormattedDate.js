import React from "react";
import "./FormattedDate.css";
import "bootstrap/dist/css/bootstrap.css";

export default function FormattedDate(props) {
  let fullDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = fullDays[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return (
    <div className="formatted-date">
      {day}, {hours}:{minutes}
    </div>
  );
}
