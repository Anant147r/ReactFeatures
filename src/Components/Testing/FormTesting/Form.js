import React, { Component } from "react";
// import
const COLORS = ["blue", "red", "yellow"];
const startingState = {
  name: "",
  email: "",
  color: COLORS[0],
};

class Form extends Component {
  state = startingState;
  reset = () => {
    this.setState(startingState);
  };
  updateField = (stateKey) => (e) => {
    this.setState({
      [stateKey]: e.target.value,
    });
  };
  submitForm = (e) => {
    e.preventDefault();
    // return saveUser(this.state.name, this.state.email, this.state.color);
    console.log("Form submitted");
  };
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div className="group">
          <label>Name</label>
          <input
            id="name-input"
            type="text"
            value={this.state.name}
            onChange={this.updateField("name")}
          ></input>
          <label>Email</label>
          <input
            id="email-input"
            type="email"
            value={this.state.email}
            onChange={this.updateField("email")}
          ></input>
        </div>

        <div className="group">
          <label>Favourite Colour</label>
          <select
            id="color-input"
            value={this.state.color}
            onChange={this.updateField("color")}
          >
            {COLORS.map((c) => {
              <option key={c} value={c}>
                My Favourite Color is : {c}
              </option>;
            })}
          </select>
        </div>
        <button type="submit">Sign up</button>
        <button type="button" onClick={this.reset}>
          Reset
        </button>
      </form>
    );
  }
}

export default Form;
