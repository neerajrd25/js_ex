const obj = { a: 1, b: 2 };
Object.freeze(obj);

obj.a = 42;
delete obj.b;

console.log(obj.a, obj.b);

const obj2 = {a: 1, b: 2};
Object.seal(obj2);
obj2.a = 42;

delete obj2.b;
obj.c = 32
console.log(obj2)
console.log(obj2.a, obj2.b);
