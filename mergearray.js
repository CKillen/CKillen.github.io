let a = [1,2,3,5,6];
let b = [];

function merge(arr1, arr2) {
  let merged = [];
  let pos1 = 0;
  let pos2 = 0;
  while(pos1 < arr1.length || pos2 < arr2.length) {
    if(arr1[pos1] > arr2[pos2] || pos1 === arr1.length) {
      merged.push(arr2[pos2]);
      pos2++;
    } else {
      merged.push(arr1[pos1]);
      pos1++;
    }
  }
  return merged;
}

console.log(merge(a, b))