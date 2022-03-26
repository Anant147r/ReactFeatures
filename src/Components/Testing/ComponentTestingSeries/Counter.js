import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState((prev) => {
      return { counter: prev.counter + 1 };
    });
  };
  render() {
    return (
      <div>
        <p>Current count: {this.state.counter}</p>
        <button onClick={this.inc}>Increment Count</button>
      </div>
    );
  }
}

export default Counter;
