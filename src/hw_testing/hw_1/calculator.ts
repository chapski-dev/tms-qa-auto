export class Calculator {
  constructor(private value1: number, private value2: number) {}

  getAddition() {
    return this.value1 + this.value2;
  }
  getSubtraction() {
    return this.value1 - this.value2;
  }

  getMultiply() {
    return this.value1 * this.value2;
  }

  getDivide() {
    return this.value1 / this.value2;
  }

  getDegree() {
    return this.value1 ** this.value2;
  }
}
