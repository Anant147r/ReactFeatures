import React, { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Anant",
      id: 1,
    };
  }
  render() {
    return (
      <div>
        About
        <div className="h1cls">Hello</div>
      </div>
    );
  }
}

export default About;
