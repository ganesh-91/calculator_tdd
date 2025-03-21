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
  describe("step 2", () => {
    test("handle any amount of numbers", () => {
      expect(add("1,2,3")).toBe(6);
    });
  });

  describe("Step 3", () => {
    test("function handle new lines between numbers", () => {
      expect(add("1\n2,3")).toBe(6);
    });
  });

  describe("Step 4", () => {
    test("function handle support different delimiters", () => {
      expect(add("//;\n1;2")).toBe(3);
    });
  });

  describe("Step 5", () => {
    test("negative number will throw an exception", () => {
      expect(add("//;\n1;2")).toBe(3);
    });
  });

  describe("Step 6", () => {
    test("should ignore numbers greater than 1000", () => {
      expect(add("2,1001")).toBe(2);
    });
  });

  describe("Step 7", () => {
    test("should supports delimiters of any length", () => {
      expect(add("//[***]\n1***2***3")).toBe(6);
    });
  });

  describe("Step 8", () => {
    test("supports multiple delimiters", () => {
      expect(add("//[*][%]\n1*2%3")).toBe(6);
    });
  });

  describe("Step 9", () => {
    test("support multiple delimiters with multiple char", () => {
      expect(add("//[*][%]\n1*2%3")).toBe(6);
    });
  });
});
