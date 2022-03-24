// const MockFunctions = require("./MockFunctions");
// import MockFunctions from "./MockFunctions";
// import { shallow } from "enzyme";

// describe("Mock functions", () => {
//   const add = jest.fn((x, y) => 3);
//   test("add", () => {
//     expect(add(2, 3)).toBe(3);
//   });
// });

const myMock = jest.fn();

const a = new myMock();
const b = {};
const bound = myMock.bind(b);
bound();

console.log(myMock.mock.instances);
