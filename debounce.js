const { log } = console;
function debounce(func, time = 100) {
  let timer;

  return (...args) => {
    log(args)
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args)
    }, time);
  }
}


const print = (text) => {
  log(text)
}
const promisifyTimeout = (delay) => new Promise((resolve, reject) => {
  setTimeout(() => {
   console.log('waiting ')
  return resolve('3 seconds have been passed');
 }, delay);
})


let str ='The quick brown fox jumps over a lazy dog';

async function debounceExample(){
  const debouncedPrint = debounce(print, 200);

  for (let index = 0; index < 10; index++) {
    const element = str[index];
    debouncedPrint(element);
  }
  await promisifyTimeout(600); 

  for (let index = 10; index < 15; index++) {
    const element = str[index];
    debouncedPrint(element);
  }
    await promisifyTimeout(600); 

  for (let index = 15; index < str.length; index++) {
    const element = str[index];
    debouncedPrint(element);
  }


}

debounceExample();

