import {
  SUN,
  CLOUD,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE,
} from "./../constants/weathers";

const getWeatherState = (weather) => {
  console.log(weather)
 

  const id = weather[0].id;
  console.log(id);

  


  if (id < 300) {
    return THUNDER;
  } else if (id < 600) {
    return RAIN;
  } else if (id < 700) {
    return SNOW;
  } else if (id < 400) {
    return DRIZZLE;
  } else if (id === 800) {
    return SUN;
  } else {
    return CLOUD;
  }
};

const transformWeather = (weather_data) => {
  const { weather } = weather_data;
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getWeatherState(weather);
 
  

  const data = {
    humidity,
    temperature: temp,
    weatherState,
    wind: `${speed} m/s`,
  };
  console.log(temp)

  return data;
};
export default transformWeather;
