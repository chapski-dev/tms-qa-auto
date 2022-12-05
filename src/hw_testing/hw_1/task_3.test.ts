import { Calculator } from "./calculator";

const sumCalculator = new Calculator(4, 4);

describe("Test Addition positive", function () {
  test("Test#1", function () {
    expect(sumCalculator.getAddition()).toBe(8);
  });
});

describe("Test Addition negative", function () {
  test("Test#2", function () {
    expect(sumCalculator.getAddition()).toBe(15);
  });
});

describe("Test Subtraction positive", function () {
  test("Test#3", function () {
    expect(sumCalculator.getSubtraction()).toBe(0);
  });
});

describe("Test Subtraction negative", function () {
  test("Test#4", function () {
    expect(sumCalculator.getSubtraction()).toBe(8);
  });
});

describe("Test Multiply positive", function () {
  test("Test#5", function () {
    expect(sumCalculator.getMultiply()).toBe(16);
  });
});

describe("Test Multiply negative", function () {
  test("Test#6", function () {
    expect(sumCalculator.getMultiply()).toBe(15);
  });
});

describe("Test Divide positive", function () {
  test("Test#7", function () {
    expect(sumCalculator.getDivide()).toBe(1);
  });
});

describe("Test Divide negative", function () {
  test("Test#8", function () {
    expect(sumCalculator.getDivide()).toBe(17);
  });
});

describe("Test Degree positive", function () {
  test("Test#9", function () {
    expect(sumCalculator.getDegree()).toBe(256);
  });
});

describe("Test Degree negative", function () {
  test("Test#10 ", function () {
    expect(sumCalculator.getDegree()).toBe(8);
  });
});
