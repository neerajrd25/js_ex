const input = [4, 2, 1, 6, 7];

const merge = (arr, low, mid, high) => {
  // copy arrays

  const left = arr.slice(low, mid+ 1)
  const right = arr.slice(mid + 1, high + 1); // tillend ? , NO, exclude the high + 1  
  console.log('left ', left);
  console.log('right', right);

  let i = 0, j = 0, k = low;
  // k is pointer to original array 
  while (i < left.length && j < right.length) {
    // start filling original array with sorted values
    if (left[i] <= right[j]) {
      arr[k++] = left[i++]
    } else {
      arr[k++] = right[j++]
    }
  }
  // check if left has any value left to becopied

  while (i < left.length) arr[k++] = left[i++]
  while (j < right.length) arr[k++] = right[j++]

}
const getMid = (low, high) => Math.floor(((high - low) + low) / 2);

const mergeSort = (arr, low, high) => {
  if (low >= high) return;
  // const mid = getMid(low, high);
  let mid = Math.floor(low + (high - low) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high)
  merge(arr, low, mid, high)

}

console.log(...input);
mergeSort(input, 0, input.length - 1)
console.log(...input) 