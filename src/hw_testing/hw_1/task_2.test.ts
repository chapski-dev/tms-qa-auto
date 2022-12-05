import { expect } from "chai";
import { Calculator } from "./calculator";

const sumCalculator = new Calculator(4, 4);

describe("Test Addition positive", function () {
  it("Test#1", function () {
    expect(sumCalculator.getAddition(), "Test#1 failed").to.equal(8);
  });
});

describe("Test Addition negative", function () {
  it("Test#2", function () {
    expect(sumCalculator.getAddition(), "Test#2 failed").to.equal(4);
  });
});

describe("Test Subtraction positive", function () {
  it("Test#3", function () {
    expect(sumCalculator.getSubtraction(), "Test#3 failed").to.equal(0);
  });
});

describe("Test Subtraction negative", function () {
  it("Test#4", function () {
    expect(sumCalculator.getSubtraction(), "Test#4 failed").to.equal(8);
  });
});

describe("Test Multiply positive", function () {
  it("Test#5", function () {
    expect(sumCalculator.getMultiply(), "Test#5 failed").to.equal(16);
  });
});

describe("Test Multiply negative", function () {
  it("Test#6", function () {
    expect(sumCalculator.getMultiply(), "Test#6 failed").to.equal(15);
  });
});

describe("Test Divide positive", function () {
  it("Test#7", function () {
    expect(sumCalculator.getDivide(), "Test#7 failed").to.equal(14);
  });
});

describe("Test Divide negative", function () {
  it("Test#8", function () {
    expect(sumCalculator.getDivide(), "Test#8 failed").to.equal(8);
  });
});

describe("Test Degree positive", function () {
  it("Test#9", function () {
    expect(sumCalculator.getDegree(), "Test#9 failed").to.equal(256);
  });
});

describe("Test Degree negative", function () {
  it("Test#10 ", function () {
    expect(sumCalculator.getDegree(), "Test#10 failed").to.equal(3);
  });
});
