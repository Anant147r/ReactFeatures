import Blog from "./Blog";
import { shallow } from "enzyme";
describe("Blog Page test", () => {
  // Find check

  it("find check", () => {
    let wrapper = shallow(<Blog />);
    expect(wrapper.find(".liCls").length).toBe(3);
  });
});
