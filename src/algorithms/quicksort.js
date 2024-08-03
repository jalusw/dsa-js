export default function quickSort(arr){
  if(arr.length <= 1) return arr;
  const pivot = arr.shift();
  const left = [];
  const right = [];

  while(arr.length){
    if(arr[0] < pivot) left.push(arr.shift());
    else right.push(arr.shift());
  }



  return [...quickSort(left),pivot,...quickSort(right)];
}
