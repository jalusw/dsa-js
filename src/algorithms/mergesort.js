
export default function mergeSort(array){
  if(array.length <= 1) return array;
  const middle = array.length;
  const right = mergeSort(array.splice(middle+1));
  const left = mergeSort(array.splice(0,middle));

  return merge(left,right);
} 


function merge(left,right){
  let merged = [];

  while(left.length && right.length){
    if(left[0].length < right[0].length){
      merged.push(left.shift());
    }else{
      merged.push(right.shift());
    }
  }

  return [...merged,...left,...right];
};
