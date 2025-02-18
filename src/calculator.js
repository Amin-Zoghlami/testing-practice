export default (function makeCalculator() {
  function add(num1, num2) {
    return num1 + num2;
  }

  function subtract(num1, num2) {
    return num1 - num2;
  }

  function multiply(num1, num2) {
    return num1 * num2;
  }

  function divide(num1, num2) {
    if (num2 === 0) return "undefined";
    return num1 / num2;
  }

  return {
    add,
    subtract,
    multiply,
    divide,
  };
})();
