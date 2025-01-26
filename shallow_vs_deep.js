
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = Object.assign({}, obj1);

const obj3 = {...obj1 }
obj3.b = {...obj1.c} // Let's revisit 
obj2.b.c = 3;

console.log(obj1.b.c, obj2.b.c); // 2,3
console.log(obj3);

// console.log(obj1.b.c, obj2.b.c);

 
console.log('---------Deep copy --------');

// Deep Clone
const obj4 = { a: 0, b: { c: 0 } };
const obj5 = structuredClone(obj4);
// const obj6 = structuredClone({...obj5, func: function(){}});

obj4.a = 4;
obj4.b.c = 4;

console.log(obj4); // { a: 4, b: { c: 4 } }
console.log(obj5); // { a: 0, b: { c: 0 } }
// console.log(obj6); // Throws Data Clone error, cannot copy functions



console.log('------------Structured clone circular reference---------------');
// Create an object with a value and a circular reference to itself.
const original = { name: "MDN" };
original.itself = original;

// Clone it
const clone = structuredClone(original);
console.log(original); // prints circular reference
console.log(original.itself === original); // true pointing to same point
console.log(clone !== original); // the objects are not the same (not same identity)
console.log(clone.name === "MDN"); // they do have the same values
console.log(clone.itself === clone); // and the circular reference is preserved
