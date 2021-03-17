import React from "react";
import WeatherIcons from "react-weathericons";
import PropTypes from "prop-types";
import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
  DRIZZLE,
  THUNDER,
} from "../../../constants/weathers";

const icons = {
  [DRIZZLE]: "day-showers",
  [THUNDER]: "day-thunderstore",
  [CLOUD]: "cloud",
  [SUN]: "day-sunny",
  [RAIN]: "rain",
  [SNOW]: "snow",
};
const getWeatherIcon = (weatherState) => {
  const icon = icons[weatherState];

  if (icon) return <WeatherIcons name={icon} size="2x" />;
  else return <WeatherIcons name="day-sunny" size="2x" />;
};
const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className="temp">
    {getWeatherIcon(weatherState)}
    <div className="temper">
      <span>{`${temperature} grados`}</span>
    </div>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
