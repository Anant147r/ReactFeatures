import { shallow } from "enzyme";
import Article from "./Article";
import Table from "./Table";

describe("Article Page", () => {
  it("click count", () => {
    let wrapper = shallow(<Article />);
    expect(wrapper.find(".clicks-0").length).toEqual(1);
    wrapper.find("button").simulate("click");
    expect(wrapper.find(".clicks-1").length).toEqual(1);
  });

  it("dive", () => {
    let wrapper = shallow(<Article />);
    expect(wrapper.find(Table).dive().find(".custom-border").length).toEqual(1);
  });

  //   snapshot

  it("snapshot 1", () => {
    let wrapper = shallow(<Table />);
    expect(wrapper).toMatchSnapshot();
  });

  it("snapshot 2", () => {
    let wrapper = shallow(<Table />);
    expect(wrapper).toMatchSnapshot();
  });

  it("snapshot 3", () => {
    let wrapper = shallow(<Table />);
    expect(wrapper).toMatchSnapshot();
  });
});
