import Dummy, { Home, Blog, About, Article, News } from "./Dummy";
import Table from "../SimulateAndDiveTest/Table";
import { shallow, mount } from "enzyme";

describe("Add testing", () => {
  it("add", () => {
    expect(Dummy(4, 6)).toBe(10);
  });

  it("home testing", () => {
    let wrapper = shallow(<Home />);
    expect(wrapper.exists(".home")).toBe(true);
  });

  it("Blog testing", () => {
    let wrapper = shallow(<Blog />);
    expect(wrapper.exists(".liCls")).toBe(true);
    expect(wrapper.exists(".mainCls")).toBe(true);
  });

  it("Blog testing", () => {
    let wrapper = shallow(<Blog />);
    expect(wrapper.find(".liCls").length).toBe(3);
  });

  it("Key at blog", () => {
    let wrapper = shallow(<Blog />);
    expect(wrapper.find(".liCls").at(0).key()).toBe("angular");
  });

  it("Type at number class", () => {
    let wrapper = shallow(<Blog />);
    expect(wrapper.find(".numbers").childAt(0).type()).toBe("div");
  });

  it("About class component testing", () => {
    let wrapper = shallow(<About />);
    expect(
      wrapper.containsAnyMatchingElements([<div>Hello</div>, <div>Help</div>])
    ).toBe(true);
  });

  it("Article simulate testing using exists", () => {
    let wrapper = shallow(<Article />);
    wrapper.find("button").simulate("click");
    expect(wrapper.exists(".clicks-1")).toBe(true);
  });

  it("Article simulate testing using find", () => {
    let wrapper = shallow(<Article />);
    wrapper.find("button").simulate("click");
    expect(wrapper.find(".clicks-1").length).toBe(1);
  });

  it("Dive testing in Article", () => {
    let wrapper = shallow(<Article />);
    expect(wrapper.find(Table).dive().find(".custom-border").length).toBe(1);
  });

  it("Class searching using mount", () => {
    let wrapper = mount(<Article />);
    expect(wrapper.exists(".custom-border")).toBe(true);
  });

  it("Instance checking on News component", () => {
    let wrapper = shallow(<News />);
    let dummyFunction = wrapper.instance().checkBoxChecked(4);
    console.log(dummyFunction);
  });

  it("spy on func function", () => {
    let wrapper = shallow(<News />);
    let instance = wrapper.instance();
    jest.spyOn(instance, "func");
    wrapper.instance().func();
    expect(wrapper.instance().func).toHaveBeenCalled();
    expect(wrapper.instance().func).toHaveBeenCalledTimes(1);
  });

  it("Testing state", () => {
    let wrapper = shallow(<News />);
    let state = wrapper.instance().state;
    console.log(state.newscount);
  });

  it("Testing properties of an element using props", () => {
    let wrapper = shallow(<News />);

    let testingProps = wrapper.find("input").props();
    console.log(testingProps);
  });

  // it.only("toHaveBeenCalled", () => {
  //   let wrapper = shallow(<News />);

  //   wrapper.instance().func();
  //   expect(wrapper.instance().func).toHaveBeenCalled();
  // });

  it.only("Match props", () => {
    let wrapper = shallow(<News />);
    let matchProps = wrapper.find("input").props();
    expect(wrapper.find("input").props()).toEqual(matchProps);
  });
});
