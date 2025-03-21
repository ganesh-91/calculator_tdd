const { add } = require("./stringCalculator");

describe("String Calculator", () => {
  describe("step 1", () => {
    test("returns 0 for an empty string", () => {
      expect(add("")).toBe(0);
    });

    test("returns number for an number string", () => {
      expect(add("1")).toBe(1);
    });

    test("adds two numbers string", () => {
      expect(add("1,5")).toBe(6);
    });
  });
});
