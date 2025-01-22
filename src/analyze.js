export default function analyzeArray(arr) {
  if (arr.length === 0) return null;

  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  for (const num of arr) {
    sum += num;
    min = Math.min(min, num);
    max = Math.max(max, num);
  }

  const length = arr.length;
  const average = sum / length;

  return {
    average,
    min,
    max,
    length,
  };
}
