const arr1 = [1, 2, 3, 3, 4, 6, 1, 6, 5, 2, 3];
const arr2 = ['a', 'c', 'b,', 'd', 'g'];

const { log, time, timeEnd } = window.console;

const bruteForce = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++)
      if (i !== j && arr[i] === arr[j]) return false;
  }
  return true;
}

const optimised = (arr) => (new Set(arr)).size === arr.length;

time('brute');
log(bruteForce(arr1));
log(bruteForce(arr2));
timeEnd('brute');




time('optimised');
log(optimised(arr1));
log(optimised(arr2));
timeEnd('optimised');

