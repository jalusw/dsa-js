export default function linearSearch(array,lookup){
  for(let i = 0;i < array.length;i++){
    if(array[i] == lookup){
      return i;
    }
  }
  return false;
}
