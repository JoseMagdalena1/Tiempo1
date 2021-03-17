import React, { Component } from "react";
import LocationList from "./components/LocationList";
import ForecastExtended from "./components/ForecastExtended";
import { setCity } from "./actions";

import "./App.css";

const cities = [
  "Madrid,es",
  "Santiago,es",
  "Barcelona,es",
  "Sevilla,es",
  "Bogota,col",
  "Buenos aires,ar",
  "Mexico,mex",
];

class App extends Component {
  constructor() {
    super();
    this.state = { city: null };
  }
  handleSelectedLocation = (city) => {
    this.setState({ city });

   // store.dispatch(setcity(city));
  };
  render() {
    const { city } = this.state;

    return (
      <div className="App">
        <LocationList
          cities={cities}
          onSelectedLocation={this.handleSelectedLocation}
        ></LocationList>
        {city === null ? (
          <h1 className="extended">no hay ciudad seleccionada</h1>
        ) : (
          <ForecastExtended city={city}></ForecastExtended>
        )}
      </div>
    );
  }
}

export default App;
