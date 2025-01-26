const myIterable = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  },
};

console.log(myIterable);

for (const value of myIterable) {
  console.log(value);
}
