import moment from "moment";
import transformWeather from "./transformWeather";

const transformForecast = (data) =>
  data.list
    .filter(
      (item) =>
      moment.unix(item.dt).hour() === 11 ||
      moment.unix(item.dt).hour() === 19 ||
      moment.unix(item.dt).hour() === 17

       
    )
    .map((item) => ({
      weekDay:moment.unix(item.dt).format('ddd'),
      hour: moment.unix(item.dt).hour(),
      data: transformWeather(item),
    }));
export default transformForecast;
