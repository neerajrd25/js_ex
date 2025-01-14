const data = [1,2,[3, [4,5, 6, ['n', 'm']],4],[5, 6]];
// const data = [1,2,[3, [4,5, 6],4],[5, 6]];

// const flat = (arr, depth) => {
//   console.log('depth ', depth, arr);
//   return arr.reduce((acc, elem)=> {
//     if ( depth > 0 && Array.isArray(elem)){
//       console.log('true when ', depth , elem)
//       return acc.concat(flat(elem, depth -1));
//     } else {
//       return acc.concat(elem);
//     }
//     // return acc.concat( depth > 0 && Array.isArray(elem) ? flat(elem, depth -1) : elem)
//   }, []);
// };


const flat = (arr, depth) => {
  // console.log(`Flattening with depth: ${depth}, Array:`, arr);
  return arr.reduce((acc, elem) => {
    if (depth > 0 && Array.isArray(elem)) {
      // Recursively flatten the sub-array
      acc.push(...flat(elem, depth - 1)); // Spread operator unpacks the flattened result
    } else {
      acc.push(elem); // Push the element directly
    }
    return acc;
  }, []);
};

console.log('Original Array : ', data)
console.log('Level 0' , flat(data, 0));
console.log('Level 1' , flat(data, 1));
console.log('Level 2' , flat(data, 2));



