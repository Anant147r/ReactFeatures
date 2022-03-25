// const MockFunctions = require("./MockFunctions");
// import MockFunctions from "./MockFunctions";
// import { shallow } from "enzyme";

describe("Mock functions", () => {
  const add = jest.fn((x, y) => 3);
  test("add", () => {
    add(2, 3);
    add(4, 5);
    console.log(add.mock);
    expect(add(2, 3)).toBe(3);
  });
});
