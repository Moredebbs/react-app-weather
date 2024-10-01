import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <body>
        <div className="weather-app">
          <header>
            <form className="search-form" id="search-form">
              <input
                type="search"
                id="search-form-input"
                className="search-form-input"
                placeholder="Enter a city.."
                required
              />

              <input
                type="submit"
                className="search-form-button"
                value="Search"
              />
            </form>
          </header>
          <main>
            <div className="weather-app-data">
              <div>
                <h1 className="weather-app-city" id="city">
                  Paris
                </h1>
                <p className="weather-app-details">
                  <span id="time">Monday</span>,
                  <span id="description">cloudy </span>
                  <br />
                  Humidity:<strong id="humidity"></strong> , Wind:
                  <strong id="wind"></strong>
                </p>
              </div>
              <div className="weather-app-temperature-container">
                <div id="icon">
                  <img
                    src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png"
                    alt="weather-app-icon"
                    className="weather-app-icon"
                  />
                </div>

                <div className="weather-app-temperature" id="temperature"></div>
                <div className="weather-app-unit">°C</div>
              </div>
            </div>
            <div className="weather-forecast" id="forecast"></div>
          </main>

          <footer>
            coded by
            <a
              href="https://github.com/Moredebbs"
              target="_blank"
              rel="noreferrer"
            >
              Moyinoluwa Owoeye
            </a>
            is
            <a href="https://github.com/Moredebbs/mi-clima">
              open-sourced on Github
            </a>
            and
            <a
              href="https://app.netlify.com/sites/mi-clima-app/deploys/65fb4458c9fa881c2318b7fe"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </footer>
          <Weather />
        </div>
      </body>
    </div>
  );
}

export default App;
