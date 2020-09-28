import React from "react";
import ReactDOM from "react-dom";
import Titles from "./components/title";
import Form from "./components/form";
import Weather from "./components/weather";
const API_KEY = "1f94f93ca28832dfd8b98077cae0e554";

class App extends React.Component {
  state = {
    description: undefined,
    city: undefined,
    temperature: undefined,
    country: undefined,
    humidity: undefined,
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api.json();
    console.log(data);
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        description: undefined,
        city: undefined,
        temperature: undefined,
        country: undefined,
        humidity: undefined,
        windSpeed: undefined,
        error: "please enter values"
      });
    }
  };
  render() {
    return (
      <div className="App">
        <Titles />
        <br />
        <Form getWeather={this.getWeather} />
        <br />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          windSpeed={this.state.windSpeed}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
