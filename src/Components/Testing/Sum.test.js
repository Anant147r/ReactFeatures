// test("My first test case", () => {
//   let data = 10;
//   expect(data).toBe(15);
// });

const sum = require("./Sum");
describe("Testing Sum function", () => {
  it("First test case", () => {
    expect(sum(3, 5)).toBe(8);
  });

  it("Second test case", () => {
    expect(sum(5, 0)).toBe(5);
  });
});
