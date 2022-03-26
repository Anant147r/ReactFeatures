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
  decrement = () => {
    this.setState((prev) => {
      return { counter: prev.counter - 1 };
    });
  };
  render() {
    return (
      <div>
        <p>Current count: {this.state.counter}</p>
        <button className="increment" onClick={this.increment}>
          Increment Count
        </button>
        <button className="decrement" onClick={this.decrement}>
          Increment Count
        </button>
      </div>
    );
  }
}

export default Counter;
