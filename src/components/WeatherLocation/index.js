import React,{Component} from "react";
import getUrlWeatherByCity from "./../../services/getUrlWeatherByCity";
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types';
import transformWeather from "./../../services/transformWeather";
import Location from "./Location";
import WeatherData from "./WeatherData";




class WeatherLocation extends Component {

 constructor(props){
   super(props);
   const {city} = props;
   this.state={
     city,
     data:null ,
   }
 }

componentDidMount(){
  this.handleUpdateClick();

}

componentDidUpdate(prevProps, prevState) {
;
}




 
  handleUpdateClick=()=>{ 
    const api_weather = getUrlWeatherByCity(this.state.city)
    fetch(api_weather).then(resolve =>{
  return resolve.json();
    }).then(data =>{
      const newWeather = transformWeather(data)
      this.setState({
        data:newWeather
      })
      console.log(newWeather);
    });



  }

  render(){
    const {onWeatherLocationClick} =this.props;
    const{city,data} = this.state;
    return(

      <div className="bueno" onClick={onWeatherLocationClick} >
      <Location city={city}></Location>
      {data ?
      <WeatherData data={data}></WeatherData> :
      <CircularProgress/>
  }
    </div>
    )
  }
 
};

WeatherLocation.propTypes={
  city:PropTypes.string.isRequired,
  onWeatheLocationClick:PropTypes.func,
}

export default WeatherLocation;
