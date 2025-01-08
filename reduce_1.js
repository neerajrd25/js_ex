const data = [1,2,[3, [4,5, 6],4],[5, 6]];

const flat = (arr) => {
  return arr.reduce((acc, elem)=> {
    return acc.concat(Array.isArray(elem) ? flat(elem) : elem)
    
  }, []);
};
// const value =  data.reduce((acc, elem)=> {
//   return acc.concat(()=>{
//     Array.isArray(elem) ? value :
//   })
  
// }, []);
console.log(flat(data));


