const BaseBuilder = require("./baseBuilder.js");

function StringBuilder(string = "") {
  if (this.isString(string) || string === undefined) {
    this.value = string || 0;
  } else {
    throw new Error("The passed value should be a string!");
  }
}

StringBuilder.prototype = Object.create(BaseBuilder.prototype);
StringBuilder.prototype.constructor = StringBuilder;

StringBuilder.prototype.remove = function (string) {
  if (this.isString(string)) {
    this.value = this.value.split(string).join("").trim();
    return this;
  } else {
    throw new Error("The passed value should be a string!");
  }
};

StringBuilder.prototype.sub = function (from, length) {
  if (this.isValidIntNumber(from) && this.isValidIntNumber(length)) {
    this.value = this.value.slice(from, from + length);
    return this;
  } else {
    throw new Error("The passed value is invalid!");
  }
};

StringBuilder.prototype.plus = function (...strings) {
  if (this.areStrings(strings)) {
    this.value += strings.join("");
    return this;
  } else {
    throw new Error("The passed value should be a string!");
  }
};

StringBuilder.prototype.minus = function (...params) {
  const [numberOfChars] = params;
  if (this.isValidIntNumber(numberOfChars) && numberOfChars !== 0) {
    this.value = this.value.slice(0, -numberOfChars);
    return this;
  } else {
    throw new Error("The passed value is invalid!");
  }
};

StringBuilder.prototype.multiply = function (repeatTimes) {
  if (this.isValidIntNumber(repeatTimes) && repeatTimes > 0) {
    this.value = this.value.repeat(repeatTimes);
    return this;
  } else {
    throw new Error("The passed value is invalid!");
  }
};

StringBuilder.prototype.divide = function (number) {
  if (this.isValidIntNumber(number) && number !== 0) {
    const numberOfChars = Math.floor(this.value.length / number);
    this.value = this.value.slice(0, numberOfChars);
    return this;
  } else {
    throw new Error("The passed value is invalid!");
  }
};

module.exports = StringBuilder;
