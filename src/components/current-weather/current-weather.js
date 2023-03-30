import "./current-weather.css";
const CurrentWeather = ({data}) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>

        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        ></img>
      </div>
      <div className="bottom">
        <div className="temprature">{Math.round(data.main.temp)}°</div>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Details : </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value"> {data.main.feels_like}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed}m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">humidity</span>
            <span className="parameter-value"> {data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value"> {data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
