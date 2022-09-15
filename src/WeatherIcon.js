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
    "01d": <WiDaySunny size={64} color="#000" />,
    "01n": <WiNightClear size={64} color="#000" />,
    "02d": <WiDayCloudy size={64} color="#000" />,
    "02n": <WiNightCloudy size={64} color="#000" />,
    "03d": <WiCloud size={64} color="#000" />,
    "03n": <WiCloud size={64} color="#000" />,
    "04d": <WiCloudy size={64} color="#000" />,
    "04n": <WiCloudy size={64} color="#000" />,
    "09d": <WiDayShowers size={64} color="#000" />,
    "09n": <WiNightAltShowers size={64} color="#000" />,
    "10d": <WiRain size={64} color="#000" />,
    "10n": <WiNightAltRain size={64} color="#000" />,
    "11d": <WiDayThunderstorm size={64} color="#000" />,
    "11n": <WiNightAltThunderstorm size={64} color="#000" />,
    "13d": <WiSnow size={64} color="#000" />,
    "13n": <WiNightSnow size={64} color="#000" />,
    "50d": <WiDayFog size={64} color="#000" />,
    "50n": <WiNightFog size={64} color="#000" />,
  };

  return <span className="main-icon">{codeMapping[props.code]} </span>;
}
