const fun = () => {
  console.log('Lets\'s have fun ', new Date().getTime())
}

const throttle = (func, delay) => {
  let timeout = null;
  console.log('Called only once')

  return () => {
    if (!timeout) {

      func();
      timeout = setTimeout(() => {
        timeout = null
      }, delay)
    }
  }
}

const throttledFun = throttle(fun, 500)
throttledFun(); // executed
throttledFun(); // ignored
setTimeout(() => {
  throttledFun(); // This will also be ignored
}, 300);
setTimeout(() => {
  throttledFun(); // This will execute
}, 600);