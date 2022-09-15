import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightCloudy,
  WiCloud,
  WiCloudy,
  WiDayShowers,
  WiNightAltShowers,
  WiRain,
  WiNightAltRain,
  WiDayThunderstorm,
  WiNightAltThunderstorm,
  WiSnow,
  WiNightSnow,
  WiDayFog,
  WiNightFog,
} from "weather-icons-react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": <WiDaySunny size={props.size} color="#000" />,
    "01n": <WiNightClear size={props.size} color="#000" />,
    "02d": <WiDayCloudy size={props.size} color="#000" />,
    "02n": <WiNightCloudy size={props.size} color="#000" />,
    "03d": <WiCloud size={props.size} color="#000" />,
    "03n": <WiCloud size={props.size} color="#000" />,
    "04d": <WiCloudy size={props.size} color="#000" />,
    "04n": <WiCloudy size={props.size} color="#000" />,
    "09d": <WiDayShowers size={props.size} color="#000" />,
    "09n": <WiNightAltShowers size={props.size} color="#000" />,
    "10d": <WiRain size={props.size} color="#000" />,
    "10n": <WiNightAltRain size={props.size} color="#000" />,
    "11d": <WiDayThunderstorm size={props.size} color="#000" />,
    "11n": <WiNightAltThunderstorm size={props.size} color="#000" />,
    "13d": <WiSnow size={props.size} color="#000" />,
    "13n": <WiNightSnow size={props.size} color="#000" />,
    "50d": <WiDayFog size={props.size} color="#000" />,
    "50n": <WiNightFog size={props.size} color="#000" />,
  };

  return <span className="main-icon">{codeMapping[props.code]} </span>;
}
