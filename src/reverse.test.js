import reverseString from "./reverse.js";

test("Normal", () => {
  expect(reverseString("abc")).toBe("cba");
});

test("Multiple Words and Characters", () => {
  expect(reverseString("Hello, World!")).toBe("!dlroW ,olleH");
});

test("Empty", () => {
  expect(reverseString("")).toBe("");
});
