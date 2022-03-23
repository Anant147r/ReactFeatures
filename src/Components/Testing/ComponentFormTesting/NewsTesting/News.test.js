import { shallow } from "enzyme";
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
  });
});
