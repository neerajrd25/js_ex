const arr1 = ['neeraj', 'rajnee']
const arr2 = ['razik', 'zlari'];

const { log, time, timeEnd } = console;

const bruteForce = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let sortedString1 = str1.split('').sort().join()
  let sortedString2 = str2.split('').sort().join();

  return sortedString1 === sortedString2;
}

const optimised = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  let map = new Map();
  for (const char of str1) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  // Map(5) { 'n' => 1, 'e' => 2, 'r' => 1, 'a' => 1, 'j' => 1 }
  // create a map of charchater and their count
  for (const char of str2) {
    if (!map.has(char) || map.get(char) === 0) return false
    map.set(char, (map.get(char) || 0) - 1);
  }
  // reduce count of each char from second string on match in map.s
  return true
}

time('brute');
log(bruteForce(arr1[0], arr1[1]));
log(bruteForce(arr2[0], arr2[1]));
timeEnd('brute');




time('optimised');
log(optimised(arr1[0], arr1[1]));
log(optimised(arr2[0], arr2[1]));
timeEnd('optimised');

