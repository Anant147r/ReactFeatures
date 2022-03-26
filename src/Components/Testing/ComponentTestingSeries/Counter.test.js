import React from "react";
import Counter from "./Counter";
import { shallow } from "enzyme";

describe("Counter Testing", () => {
  it("Start with a count of 0", () => {
    let wrapper = shallow(<Counter />);
    const text = wrapper.find("p").text();
    expect(text).toBe("Current count: 0");
  });

  it("Can increment the count when the button is clicked", () => {
    let wrapper = shallow(<Counter />);
    const incrementButton = wrapper.find("button.increment");
    incrementButton.simulate("click");
    let text = wrapper.find("p").text();
    expect(text).toEqual("Current count: 1");
  });

  it("Can decrement the count when the decrement button is clicked", () => {
    let wrapper = shallow(<Counter />);
    const decrementButton = wrapper.find("button.decrement");
    decrementButton.simulate("click");
    let text = wrapper.find("p").text();
    expect(text).toEqual("Current count: -1");
  });
});
