import React from "react";
import "./styles.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increase = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  decrease = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  render() {
    return (
      <div>
        <div>
          <button className="button1" onClick={this.increase}>
            UpCount
          </button>
          <button className="button2" onClick={this.decrease}>
            DownCount
          </button>
        </div>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default Counter;
