const sortedArr = [1, 2, 3, 7, 9, 70, 100, 101];


const iterativeBinarySearch = (arr, target) => {
  let low = 0, high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    // console.log('Low ', low, 'High ', high, 'Mid ', mid)
    if (arr[mid] === target) return mid

    else if (arr[mid] < target) low = mid + 1
    else high = mid - 1
  }

  return -1
}


console.log(iterativeBinarySearch(sortedArr, 3));
console.log(iterativeBinarySearch(sortedArr, 101));
console.log(iterativeBinarySearch(sortedArr, 6));


const recurrsiveBinarySearch = (arr, target) => {

  const binarySeach = (arr, low, high, target) => {
    if (low > high ) return -1
    let mid = Math.floor((low + high) / 2)
    if (arr[mid] === target) return mid
    else if (arr[mid] < target) return binarySeach(arr, mid + 1, high, target);
    else return binarySeach(arr, low, mid - 1, target);
  }

  return binarySeach(arr, 0, arr.length - 1, target)
}

console.log(recurrsiveBinarySearch(sortedArr, 3));
console.log(recurrsiveBinarySearch(sortedArr, 101));
console.log(recurrsiveBinarySearch(sortedArr, 6));