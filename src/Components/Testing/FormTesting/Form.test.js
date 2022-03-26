import React from "react";
import Form from "./Form";
import { shallow } from "enzyme";

const simulateChangeOnInput = (wrapper, input, value) => {
  wrapper.find(input).simulate("change", {
    target: { value: value },
  });
  return wrapper.find(input);
};

describe("Form", () => {
  it("Has a default color of blue selected", () => {
    const wrapper = shallow(<Form />);
    const colorSelect = wrapper.find("select");
    expect(colorSelect.props().value).toEqual("blue");
  });

  it.only("Let me fill out a form", () => {
    const wrapper = shallow(<Form />);

    // 1ST EXAMPLE

    // let nameInput = wrapper.find("input").first();
    // nameInput.simulate("change", {
    //   target: { value: "Anant" },
    // });

    // nameInput = wrapper.find("input").first(); //if we donot do this then nameInput's value will be the old one (not the updated on)
    // expect(nameInput.props().value).toEqual("Anant");

    // 2ND EXAMPLE

    // let updatedInput = simulateChangeOnInput(
    //   wrapper,
    //   "input#name-input",
    //   "Anant Rawat"
    // );
    // expect(updatedInput.props().value).toEqual("Anant Rawat");

    // 3RD EXAMPLE  - FOR RESETING THE FORM

    const nameInput = simulateChangeOnInput(
      wrapper,
      "#name-input",
      "Anant Rawat"
    );
    const emailInput = simulateChangeOnInput(
      wrapper,
      "#email-input",
      "anant.rawat@gmail.com"
    );
    const colorInput = simulateChangeOnInput(wrapper, "#name-input", "Yellow");

    expect(nameInput.props().value).toEqual("Anant Rawat");
    expect(emailInput.props().value).toEqual("anant.rawat@gmail.com");
    expect(colorInput.props().value).toEqual("Yellow");
  });

  it.only("Let me click the reset button", () => {
    let wrapper = shallow(<Form />);
    const resetButton = wrapper.find(`button[type="button"]`);
    resetButton.simulate("click");

    expect(wrapper.find("#name-input").props().value).toEqual("");
    expect(wrapper.find("#email-input").props().value).toEqual("");
    expect(wrapper.find("#color-input").props().value).toEqual("blue");
  });

  it("Submits the form", () => {
    let wrapper = shallow(<Form />);
    wrapper.find('button[type="submit"]').simulate("click");
  });
});
