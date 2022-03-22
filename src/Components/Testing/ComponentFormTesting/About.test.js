import About from "./About";
import { shallow } from "enzyme";
describe("About page testing", () => {
  //   class check
  it("class check", () => {
    let wrapper = shallow(<About />);
    // console.log(wrapper.debug());
    expect(wrapper.exists(".h1cls")).toEqual(true);
    // expect()
  });

  //   state check
  it("state check", () => {
    let wrapper = shallow(<About />);
    expect(wrapper.state()).toEqual({
      name: "Anant",
      id: 1,
    });
  });

  //   Html Check
  it("Html check", () => {
    let wrapper = shallow(<About />);
    expect(wrapper.contains(<div className="h1cls">Hello</div>)).toEqual(true);
  });

  // Check html irrespective of the classname

  it("Check without classname", () => {
    let wrapper = shallow(<About />);
    expect(wrapper.containsAllMatchingElements([<div>Hello</div>])).toEqual(
      true
    );
  });

  // check with message given in options
  it("Checkout with given messgaes", () => {
    let wrapper = shallow(<About />);
    expect(
      wrapper.containsAnyMatchingElements([<div>Hello</div>, <div>Help</div>])
    );
  });
});
