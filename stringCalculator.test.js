const { add } = require("./stringCalculator");

describe("String Calculator", () => {
  describe("step 1", () => {
    test("returns 0 for an empty string", () => {
      expect(add("")).toBe(0);
    });
  });
});
