// const arr1 = [1, 2, 3, 0, 0, 0];

// const arr2 = [2, 4, 6];
const arr1 = [4, 5, 6, 0, 0, 0]; // m = 3, last 3 slots are placeholders
const arr2 = [1, 2, 3]; // n = 3

// const arr1 = [1, 2, 3, 0, 0, 0]; // m = 3, last 3 slots are placeholders
// const arr2 = [4, 5, 6]; // n = 3
// Problem Statement make arr1 as a sorted array combination of arr1 and arr2;
// two pointers
const merge = (arr1, m, arr2, n) => {


  let p1 = m - 1;
  let p2 = n - 1;

  let last = m + n - 1;

  console.log(p1, p2, last)

  while (p1 >= 0 & p2 >= 0) {
    if (arr1[p1] > arr2[p2]) {
      arr1[last--] = arr1[p1--]
    } else {
      arr1[last--] = arr2[p2--]
    }
  }
  // if p1 has reached to end, copy element from arr2 to arr1 in remaining positions
  console.log(p1, arr1);
  
  while (p2 >= 0) {
    arr1[last--] = arr2[p2--];
  }

}

merge(arr1, 3, arr2, 3);
console.log(arr1)
