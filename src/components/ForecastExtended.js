import React, { Component } from "react";
import PropTypes from "prop-types";
import ForecastItem from "./ForecastItem";
import transformForecast from "./../services/transformForecast";

// const days =[
//   'lunes',
//   'martes',
//   'miercoles',
//   'jueves',
//   'viernes',
// ];

// const data = {
//   temperature:10,
//   humidity:10,
//   weatherState:'normal',
//   wind:'normal'
// }

const api_key = "cdc9ca2093aaed987fb90d9b1c1a35ff";

const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
  constructor() {
    super();
    this.state = { forecastData:null };
  }
  
  renderForecastItemDays(forecastData) {
    return forecastData.map((forecast) => (
      <ForecastItem
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay}
        hour={forecast.hour}
        data={forecast.data}
      ></ForecastItem>
    ));
  }



   handleAlgo = city =>{
    const url_forecast = `${url}?q=${city}&appid=${api_key}&units=metric`;
    fetch(url_forecast)
      .then((data) => data.json())
      .then((weather_data) => {
        console.log(weather_data);
        const forecastData = transformForecast(weather_data);
        console.log(forecastData);
        this.setState ({forecastData})
        
      });
  }
  componentDidMount() {
    this.handleAlgo(this.props.city);
    
  }
  

  componentWillReceiveProps(nextProps){

    if(nextProps.city !== this.props.city)
    this.handleAlgo(nextProps.city)
  }


  renderProgress = () => {
    return <h3>cargando Pronostico estendido....</h3>;
  };
  render() {
    
    const { city } = this.props;
    const { forecastData } = this.state;
    return (
      <div className="extended">

      <div >
        <h2 >pronostico extendido para {city}</h2>
        { forecastData 
          ? this.renderForecastItemDays(forecastData)
          : this.renderProgress()}
      </div>
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};

export default ForecastExtended;
