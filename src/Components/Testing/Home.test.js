import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";
configure({ adapter: new Adapter() });

import Home from "./Home";
import { shallow } from "enzyme";
describe("Shallow Home page", () => {
  it("Object Wrapper", () => {
    let wrapper = shallow(<Home />);
    expect(wrapper.exists(".home")).toEqual(true);
  });
});
