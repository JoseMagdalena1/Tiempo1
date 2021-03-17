import React from 'react';
import Location from './../Location';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './style.css';






const  WeatherData = ({data}) => {

    const {temperature, humidity,weatherState,wind}=data
  return  (<div className="weatherDataCont">
        <Location/>
        <WeatherTemperature 
        temperature ={temperature} 
         weatherState={weatherState}
         
         />
      <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>)

};




export default WeatherData;