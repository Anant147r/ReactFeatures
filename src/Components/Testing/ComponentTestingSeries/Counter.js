import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  makeIncrementer = (amount) => {
    this.setState((prev) => {
      return { counter: prev.counter + amount };
    });
  };

  increment = () => {
    this.makeIncrementer(1);
  };

  decrement = () => {
    this.makeIncrementer(-1);
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
