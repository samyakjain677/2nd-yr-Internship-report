import React from "react";
import ReactDOM from "react-dom";

const numArr = [1, 2, 3, 4, 5, 6, 7];
const list = numArr.map(numbers => (
  <p>
    <li>{numbers}</li>
  </p>
));

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>List Task</h1>
        <h1>
          <ul>{list}</ul>
        </h1>
        >
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
