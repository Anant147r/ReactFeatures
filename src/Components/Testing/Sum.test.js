// test("My first test case", () => {
//   let data = 10;
//   expect(data).toBe(15);
// });

const sum = require("./Sum");
describe("Testing Sum function", () => {
  // value should be equal therefor  " toBe " used

  it("First test case", () => {
    expect(sum(3, 5)).toBe(8);
  });

  it("Second test case", () => {
    expect(sum(5, 0)).toBe(5);
  });

  // value should not be equal therefore " not.toBe. " used
  it("3rd test case", () => {
    expect(sum(4, 5)).not.toBe(10);
  });

  it("4th test case", () => {
    let data = sum(4, 5);
    expect(data).toEqual({
      name: "Anant",
    });
  });
});
