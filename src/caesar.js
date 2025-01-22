export default function caesarCipher(str, num) {
  if (num !== 0) {
    num %= 26;
  }

  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);

    if (isLetter(char)) {
      char = shiftLetter(char, num);
    }

    newStr += char;
  }

  return newStr;

  function isLetter(char) {
    const charCode = char.charCodeAt(0);
    return (
      (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)
    );
  }

  function isUpperCase(char) {
    return char === char.toUpperCase();
  }

  function shiftLetter(char, num) {
    let baseCharCode = isUpperCase(char) ? 65 : 97;
    let newCharCode = char.charCodeAt(0) + num;

    newCharCode = ((newCharCode - baseCharCode + 26) % 26) + baseCharCode;

    return String.fromCharCode(newCharCode);
  }
}
