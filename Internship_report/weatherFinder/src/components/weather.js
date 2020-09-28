import React from "react";
import { box } from "bulma";
const Weather = props => {
  return (
    <div className="box box-link-hover-shadow has-text-centered">
      {props.temperature && <p>temperature={props.temperature} °C</p>}
      {props.city && <p>city={props.city}</p>}
      {props.country && <p>country={props.country}</p>}
      {props.humidity && <p>humidity={props.humidity}</p>}
      {props.windSpeed && <p>wind Speed={(props.windSpeed * 18) / 5} Km/hr</p>}
      {props.description && <p> description={props.description}</p>}
      {props.error && <p>{props.error}</p>}
    </div>
  );
};
export default Weather;
