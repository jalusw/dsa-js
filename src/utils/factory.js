export function generateRandomArray(length) {
  const arr = [];
  while (length--) {
    arr.push(Math.floor(Math.random() * 10));
  }
  return arr;
}
