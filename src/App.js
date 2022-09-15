import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Nicosia" />

        <p className="footer">
          <a
            href="https://github.com/adele-dube/react_js_weather_app-2022"
            className="links"
            target="_blank"
            rel="noreferrer"
          >
            Open-Source Code_
          </a>
          by Adele_D ©2022
        </p>
      </div>
    </div>
  );
}
