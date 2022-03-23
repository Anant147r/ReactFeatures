import React, { Component } from "react";
import axios from "axios";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newscount: 0,
    };
  }
  componentDidMount() {
    this.func(90, 80);
  }
  func = () => {
    console.log("Hello");
  };
  // func=async(no1,no2)=>{
  //     let url=""
  // }
  checkBoxChecked = (id, test) => {
    return { id: id };
  };
  render() {
    return (
      <div>
        Hello
        <button onClick={() => this.func()}> Click</button>
      </div>
    );
  }
}

export default News;
