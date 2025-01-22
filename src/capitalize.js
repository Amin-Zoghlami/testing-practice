export default function capitalize(str) {
  const firstChar = str.charAt(0);
  return str.replace(firstChar, firstChar.toUpperCase());
}
