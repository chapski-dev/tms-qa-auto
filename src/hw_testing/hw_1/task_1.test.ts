/* #### Task 1 💻

- Реализовать класс калькулятор, который принимает имеет несколько методов (сложение, вычитание, умножение, деление, и еще любой/любые на выбор) и принимает 2/3 параметра: 2 цифры (и операция)
- Написать по 10 положительных и отрицательных тестов для каждого варианта:
	- Mocha
	- Mocha + chai
	- Jest

*Группируем тесты с помощью Describe. Так же применяем хуки, где они уместны */

import assert from "assert";
import { Calculator } from "./calculator";

const sumCalculator = new Calculator(4, 4);

describe("Test Addition positive", function () {
  it("Test#1", function () {
    assert.equal(sumCalculator.getAddition(), 8, "Test#1 failed");
  });
});

describe("Test Addition negative", function () {
  it("Test#2", function () {
    assert.equal(sumCalculator.getAddition(), 10, "Test#2 failed");
  });
});

describe("Test Subtraction positive", function () {
  it("Test#3", function () {
    assert.equal(sumCalculator.getSubtraction(), 0, "Test#3 failed");
  });
});

describe("Test Subtraction negative", function () {
  it("Test#4", function () {
    assert.equal(sumCalculator.getSubtraction(), 8, "Test#4 failed");
  });
});

describe("Test Multiply positive", function () {
  it("Test#5", function () {
    assert.equal(sumCalculator.getMultiply(), 16, "Test#5 failed");
  });
});

describe("Test Multiply negative", function () {
  it("Test#6", function () {
    assert.equal(sumCalculator.getMultiply(), 15, "Test#6 failed");
  });
});

describe("Test Divide positive", function () {
  it("Test#7", function () {
    assert.equal(sumCalculator.getDivide(), 1, "Test#7 failed");
  });
});

describe("Test Divide negative", function () {
  it("Test#8", function () {
    assert.equal(sumCalculator.getDivide(), 8, "Test#8 failed");
  });
});

describe("Test Degree positive", function () {
  it("Test#9", function () {
    assert.equal(sumCalculator.getDegree(), 256, "Test#9 failed");
  });
});

describe("Test Degree negative", function () {
  it("Test#10 ", function () {
    assert.equal(sumCalculator.getDegree(), 8, "Test#10 failed");
  });
});
