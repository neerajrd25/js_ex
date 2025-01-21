
const { log } = console;
function CounterAPI() {
  let counter = 0;

  function increment() {
    log('incrementing ');
    counter = ++counter;
    log('incremented ', counter);
  }

  function getCounterValue() {
    return counter;
  }

  return [increment, getCounterValue];
}

const [increment, getValue] = CounterAPI(); // outerFunction executes and returns innerFunction
const [increment2, getValue2] = CounterAPI(); // outerFunction executes and returns innerFunction

// const obj = CounterAPI(); // outerFunction executes and returns innerFunction

// obj();
// obj();
// obj[0]();
// obj[0]();
// obj[0]();
// obj[0]();
// log(obj[1]())

increment();
increment();
increment();
increment();
log(getValue())

increment2();
log(getValue2())


const user = {
  name: "Neeraj",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

// Destructure the greet method
const { greet } = user;
greet(); // Output: "Hello, undefined"
user.greet()
greet.bind({name: 'Lakshmi'})()