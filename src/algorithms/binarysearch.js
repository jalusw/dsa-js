export default function binarySearch(array, lookup) {
  let left = 0;
  let right = array.length;

  do {
    let middle = Math.floor((right - left) / 2) + left;
    if (array[middle] == lookup) {
      return middle;
    } else if (array[middle] > lookup) {
      right = middle - 1;
    } else {
      left = middle;
    }

  } while (left < right);

  return false;
}
