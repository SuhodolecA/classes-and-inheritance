class BaseBuilder {
  constructor(value) {
    this.value = value;
  }

  plus(...params) {
    throw new Error("This is an abstract method and has no implementation!");
  }

  minus(...params) {
    throw new Error("This is an abstract method and has no implementation!");
  }

  multiply(number) {
    throw new Error("This is an abstract method and has no implementation!");
  }

  divide(number) {
    throw new Error("This is an abstract method and has no implementation!");
  }

  get() {
    return this.value;
  }

  // helper methods
  isValidIntNumber(number) {
    return typeof number === "number" && Number.isInteger(number);
  }

  areValidNumbers(params) {
    return (
      params.length && params.every((param) => this.isValidIntNumber(param))
    );
  }

  isString(string) {
    return typeof string === "string";
  }

  areStrings(strings) {
    return (
      strings.length && strings.every((string) => typeof string === "string")
    );
  }
}

module.exports = BaseBuilder;
