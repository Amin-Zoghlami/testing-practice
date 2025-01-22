import caesarCipher from "./caesar.js";

test("Normal", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Uppercase", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
