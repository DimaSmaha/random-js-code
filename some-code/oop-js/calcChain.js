/**
Method Chaining
Create a Calculator class with methods add, subtract, multiply, and divide.
Ensure each method returns the instance of the Calculator to allow for method chaining.
 */

class Calculator {
  start = 0;

  add(num) {
    this.start += num;
    return this;
  }

  extract(num) {
    this.start -= num;
    return this;
  }

  showRes() {
    console.log(this.start);
  }
}

const calc = new Calculator();

calc.add(1).add(5).add(6).extract(3).extract(2).showRes();
