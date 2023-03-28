const BaseBuilder = require("./baseBuilder.js");

class IntBuilder extends BaseBuilder {
  constructor(number) {
    super(number);
    if (this.isValidIntNumber(number) || number === undefined) {
      this.value = number || 0;
    } else {
      throw new Error("The passed value is invalid!");
    }
  }

  mod(number) {
    if (this.isValidIntNumber(number) && number !== 0) {
      this.value %= number;
      return this;
    } else {
      throw new Error("The passed value is invalid!");
    }
  }

  plus(...numbers) {
    if (this.areValidNumbers(numbers)) {
      this.value = numbers.reduce((acc, number) => {
        return acc + number;
      }, this.value);
      return this;
    } else {
      throw new Error("The passed value is invalid!");
    }
  }

  minus(...numbers) {
    if (this.areValidNumbers(numbers)) {
      this.value = numbers.reduce((acc, param) => {
        return acc - param;
      }, this.value);
      return this;
    } else {
      throw new Error("The passed value is invalid!");
    }
  }

  multiply(number) {
    if (this.isValidIntNumber(number)) {
      this.value *= number;
      return this;
    } else {
      throw new Error("The passed value is invalid!");
    }
  }

  divide(number) {
    if (this.isValidIntNumber(number) && number !== 0) {
      this.value /= number;
      return this;
    } else {
      throw new Error("The passed value is invalid!");
    }
  }

  static random(from, to) {
    if (
      this.prototype.isValidIntNumber(from) &&
      this.prototype.isValidIntNumber(to)
    ) {
      const diff = to - from;
      const result = Math.floor(Math.random() * diff) + from;
      return result;
    } else {
      throw new Error("The passed value is invalid!");
    }
  }
}

module.exports = IntBuilder;
