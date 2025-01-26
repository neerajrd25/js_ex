const a = [3, 4, 6, 9, 10, 12, 14, 15, 17, 19, 21];


const iterativeBinarySearch = (arr, target) => {
  let low = 0, high = arr.length - 1;
  let mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    // console.log('Low ', low, 'High ', high, 'Mid ', mid)
    if (arr[mid] === target) return mid

    else if (arr[mid] < target) low = mid + 1
    else high = mid - 1
  }

  return mid * -1
}


const nextSmallest = (arr, target) => {

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] == target) {
      return target;
    } else if (arr[index] > target) {
      return arr[--index] || -1;
    }

  }
}

const nextSmallestBinary = (arr, target) => {
  const index = iterativeBinarySearch(arr, target);
  // console.log(index);
  return index >= 0 ? arr[index] : arr[ (-1 * index)]
}


console.time('Brute force');
console.log(nextSmallest(a, 9));
console.log(nextSmallest(a, 11));
console.log(nextSmallest(a, 8));
// console.log(nextSmallest(a, 2));
console.timeEnd('Brute force');
// TODO try to use binary search here 

console.time('Optimised');
console.log(nextSmallestBinary(a, 9));
console.log(nextSmallestBinary(a, 11));
console.log(nextSmallestBinary(a, 8));
// console.log(nextSmallestBinary(a, 2));
console.timeEnd('Optimised');