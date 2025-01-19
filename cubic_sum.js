// a3 + b3 == c3 + d3

const n = 100;

console.time('Brute');
for (let a = 1; a <= n; a++) {
  for (let b = 1; b <= n; b++) {
    for (let c = 1; c <= n; c++) {
      for (let d = 1; d <= n; d++) {
        if ((a ^ b ^ c ^ d) !== 0 && Math.pow(a, 3) + Math.pow(b, 3) === Math.pow(c, 3) + Math.pow(d, 3)) {
          // console.log(a, b, c, d);

        }
      }
    }
  }
}
console.timeEnd('Brute');


console.time('Optimised');

const pairMap = new Map();
for (let a = 1; a <= n; a++) {
  for (let b = 1; b <= n; b++) {
    if ((a ^ b) !== 0) {
      let result = Math.pow(a, 3) + Math.pow(b, 3);
      if (pairMap.has(result)){
        pairMap.get(result).push([a,b]);
      }else {
        pairMap.set(result, [[a, b]]);
      }
    }
  }
}
// console.log(pairMap)

// Now iterate the pairMap 

for (const [key, list] of pairMap.entries()) {
      // value
  if(list.length > 2){
    // console.log('Pair ', ...list);
    
    // list.forEach((pair)=> console.log(pair))
  }
}
console.timeEnd('Optimised');
