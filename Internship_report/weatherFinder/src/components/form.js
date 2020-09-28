import React from "react";
import form from "bulma";
const Form = props => {
  return (
    <div className="box">
      <form className="form has-text-centered" onSubmit={props.getWeather}>
        <div className="columns ">
          <div className="column is-3" />
          <input
            className="input is-primary is-rounded column is-expanded is-3"
            type="text"
            name="country"
            placeholder="Enter country name"
          />
          <input
            className="input is-success is-rounded column is-3"
            type="text"
            name="city"
            placeholder="Enter city name"
          />
        </div>
        <div>
          <button className="button is-rounded is-danger ">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
