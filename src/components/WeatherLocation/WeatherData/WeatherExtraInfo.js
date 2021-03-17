import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const WeatherExtraInfo = ({humidity, wind}) =>(
<div className="weatherExtraInfo">
    <span>{`${humidity} % humedad ---`}</span>
<span>{`${wind}`}</span>
</div>
);


WeatherExtraInfo.propTypes={
    humidity:PropTypes.number.isRequired,
    wind:PropTypes.string.isRequired,
}
export default WeatherExtraInfo;