import React, { Component } from "react";
import Table from "../SimulateAndDiveTest/Table";
const Dummy = (a, b) => {
  return a + b;
};

export const Home = () => {
  return <div className="home">Hello</div>;
};

export const Blog = () => {
  return (
    <div className="mainCls">
      <ul>
        <li key="angular" className="liCls">
          Angular
        </li>
        <li key="node" className="liCls">
          Node
        </li>
        <li key="react" className="liCls">
          React
        </li>
      </ul>
      <div className="numbers">
        <div>one</div>
        <div>two</div>
      </div>
      <div>
        <button className="my-button disabled btn-primary">Submit</button>
      </div>
      <div className="some-class"></div>
    </div>
  );
};

export class About extends Component {
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

export class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        {/* <div className="clicks-1"></div> */}
        <div className={`clicks-${count}`}>{count}</div>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Increment
        </button>
        <h1>Article Details</h1>
        <Table />
      </div>
    );
  }
}

export class News extends Component {
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

export default Dummy;
