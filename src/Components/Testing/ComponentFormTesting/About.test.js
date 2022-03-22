import About from "./About";
import { shallow } from "enzyme";
describe("About page testing", () => {
  it("class check", () => {
    let wrapper = shallow(<About />);
    // console.log(wrapper.debug());
    expect(wrapper.exists(".h1cls")).toEqual(true);
    // expect()
  });
});
