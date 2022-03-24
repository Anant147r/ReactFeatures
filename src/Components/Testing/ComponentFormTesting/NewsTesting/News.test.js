import { shallow, mount } from "enzyme";
import News from "./News";

describe("instance, state, props ---", () => {
  it("Instance testing", () => {
    let wrapper = shallow(<News />);
    let anyFun = wrapper.instance().checkBoxChecked(9);
    console.log(anyFun);
  });

  // checking whether componentDidMount have been called or not and how many times
  it("jest spyon componentdidmount", () => {
    jest.spyOn(News.prototype, "componentDidMount");
    shallow(<News />);
    expect(News.prototype.componentDidMount).toHaveBeenCalled();
    expect(News.prototype.componentDidMount).toHaveBeenCalledTimes(1);
  });

  //   checking for func(), whether it has been called or not
  it("jest spyon func()", () => {
    let wrapper = shallow(<News />);
    let instance = wrapper.instance();
    jest.spyOn(instance, "func");
    wrapper.find("button").simulate("click");
    expect(wrapper.instance().func).toHaveBeenCalledTimes(1);
    expect(wrapper.instance().func).toHaveBeenCalledWith(80, 80); //it means whether the function is call with parameters with 80 ,80
  });

  // state count
  it("state count", () => {
    let wrapper = shallow(<News />);
    console.log(wrapper.state());
    wrapper.instance().func();
    // console.log(wrapper.state());
    expect(wrapper.state().newscount).toBe(1);
  });

  // check props a particular field

  it("props check", () => {
    let wrapper = mount(<News />);
    let inputProps = wrapper.find("input").props();
    let styles = wrapper.find("input").get(0);
    console.log(styles.style);
    let matchProps = {
      type: "text",
      id: "firstName",
      value: "codeimprove",
      name: "firstname",
    };
    expect(wrapper.find("input").props()).toEqual(matchProps);
  });

  // checking styles
  it("checking styles", () => {
    let wrapper = shallow(<News />);
    let wrapperStyle = wrapper.find("input").style;
  });
});
