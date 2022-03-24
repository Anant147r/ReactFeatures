import React, { Component } from "react";
import axios from "axios";
import "./News.css";
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
    this.setState((st) => ({ newscount: st.newscount + 1 }));
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
        <input
          type="text"
          id="firstName"
          value="codeimprove"
          name="firstname"
        ></input>
      </div>
    );
  }
}

export default News;
