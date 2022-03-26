import React from "react";
import Counter from "./Counter";
import { shallow } from "enzyme";

describe("Counter Testing", () => {
  it("Start with a count of 0", () => {
    let wrapper = shallow(<Counter />);
    const text = wrapper.find("p").text();
    expect(text).toBe("Current count: 0");
  });
});
