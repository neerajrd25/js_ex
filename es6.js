// arrows 
const { log } = console
{
  const evens = [0, 2, 4, 6, 8, 10, 12, 14, 16]

  const odds = evens.map(v => v + 1);
  const nums = evens.map((v, i) => v + i);
  const pairs = evens.map(v => ({ even: v, odd: v + 1 }));

  log(evens);
  log(odds);
  log(nums);
  log(pairs);

  // Statement bodies
  const fives = [];
  nums.forEach(v => {
    if (v % 5 === 0)
      fives.push(v);
  });
  log(fives);

  // Lexical this
  var bob = {
    _name: "Bob",
    _friends: ['neeraj', 'suraj'],
    printFriends() {
      this._friends.forEach(f =>
        console.log(this._name + " knows " + f));
    }
  }
  // log(bob);
  bob.printFriends()

} // arrrows

// classes 
{
  class ABC {
    name;
    constructor() {
      this.name = 'ABC';
    }
    shoutMyName() {
      log(`My Name is ${this.name}`)
    }
  }
  class XYZ extends ABC {
    constructor() {
      super();
      this.name = 'XYZ'
    }
    shoutMyName() {
      super.shoutMyName();
      log(`I am Child  ${this.name}`)
      // log(`My Parent  ${super.name}`)
    }
  }

  let firstObj = new ABC();
  let secondObj = new XYZ();

  firstObj.shoutMyName();
  secondObj.shoutMyName();
}
// template literals
{
  let [f, , g] = [1, 2, 3];
  log(f, g)
  // Fail-soft destructuring
  var [a] = [];
  log(a)
  a === undefined;

  // Fail-soft destructuring with defaults
  var [b = 1] = [];
  log(b === 1);
}
// default , rest, spread
{
  function f(x, y = 12) {
    // y is 12 if not passed (or passed as undefined)
    return x + y;
  }
  log(f(3) == 15)

  function g(x, ...y) {
    // y is an Array
    return x * y.length;
  }
  log(g(3, "hello", true) == 6)
  function h(x, y, z) {
    return x + y + z;
  }
  // Pass each elem of array as argument
  log(h(...[1, 2, 3]) == 6)
}
// let, const 
{
  function f() {
    {
      let x;
      {
        // okay, block scoped name
        const x = "sneaky";
        // error, const
        x = "foo";
      }
      // error, already declared in block
      // let x = "inner"; // ERROR
    }
  }

}
// Iterators For of
{
  let fibonacci = {
    [Symbol.iterator]() {
      let pre = 0, cur = 1;
      return {
        next() {
          [pre, cur] = [cur, pre + cur];
          return { done: cur < 1000 ? false : true, value: cur }
        }
      }
    }
  }

  for (var n of fibonacci) {
    log(n);
  }
}
{


  // Tail calls 
  function factorial(n, acc) {
    'use strict';
    if (n <= 1) return acc;
    return factorial(n - 1, n * acc);
  }

  // Stack overflow in most implementations today,
  // but safe on arbitrary inputs in ES6
  // log(factorial(100000, 1))
}
// promises
{
  function timeout(durarion = 0) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, durarion);
    })
  }
  let p = timeout(2000).then(() => timeout(3000)).then(() => {
    throw new Error('hmm')
  }).catch(err => {
    return Promise.all([timeout(100), timeout(200)]);
  })
}
// binary and octals 
{
  log(0b111110111 === 503) // true
  log(0o767 === 503) // true
}