/**
[1, 2, 3, 4, 5]
6
[[1, 5], [2, 4]]
*/

const arr = [1, 2, 3, 4, 5];
const pairs = [];

const getPairs = (arr, target) => {
  const pairs = [];
  const visted = new Set();

  arr.forEach(element => {
    const val = target - element;
    if (visted.has(val)) {
      pairs.push([element, val]);
    }
    visted.add(element)
  });
  return pairs;
}


console.log(getPairs(arr, 6))