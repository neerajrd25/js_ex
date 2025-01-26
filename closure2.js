function createCounter() {
  let count = 0;
  
  return {
    increment: async function() {
      count++;
      console.log(count);
      await Promise.resolve();
      console.log(count);
    },
    decrement: function() {
      count--;
      console.log(count);
    }
  };
}

const counter = createCounter();
counter.increment();
// counter.decrement();


