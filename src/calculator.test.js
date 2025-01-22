import calculator from "./calculator.js";

test("Add Normal", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("Add Floating", () => {
  expect(calculator.add(-7.5, -2)).toBeCloseTo(-9.5);
});

test("Subtract Normal", () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});

test("Subtract Floating", () => {
  expect(calculator.subtract(-7.5, -2)).toBeCloseTo(-5.5);
});

test("Multiply Normal", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("Multiply Floating", () => {
  expect(calculator.multiply(-7.5, -2)).toBeCloseTo(15);
});

test("Divide Normal", () => {
  expect(calculator.divide(2, 2)).toBe(1);
});

test("Divide Floating", () => {
  expect(calculator.divide(-7.5, -2)).toBeCloseTo(3.75);
});

test("Divide Zero", () => {
  expect(calculator.divide(1, 0)).toBe("undefined");
});
