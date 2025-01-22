import capitalize from "./capitalize.js";

test("Normal", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Multiple Words", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("Numbers", () => {
  expect(capitalize("123")).toBe("123");
});

test("Empty", () => {
  expect(capitalize("")).toBe("");
});
