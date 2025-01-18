const myPromise = new Promise((resolve, reject) => {
  const success = true; // Simulate a condition

  if (success) {
    resolve('Operation succeeded');
  } else {
    reject('Operation failed');
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('Promise is settled.');
  });

const promise1 = Promise.resolve('First');
const promise2 = Promise.resolve('Second');
const promise3 = Promise.resolve('Third');

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // Logs: ["First", "Second", "Third"]
  });

const slowPromise = new Promise((resolve) => setTimeout(() => resolve('Slow'), 2000));
const fastPromise = new Promise((resolve) => setTimeout(() => resolve('Fast'), 1000));

Promise.race([slowPromise, fastPromise])
  .then((result) => {
    console.log(result); // Logs: "Fast"
  });

const promiseA = Promise.resolve('A');
const promiseB = Promise.reject('B failed');

Promise.allSettled([promiseA, promiseB])
  .then((results) => {
    console.log(results);
    // Logs:
    // [
    //   { status: 'fulfilled', value: 'A' },
    //   { status: 'rejected', reason: 'B failed' }
    // ]
  });

const promiseX = Promise.reject('X failed');
const promiseY = Promise.resolve('Y succeeded');
const promiseZ = Promise.resolve('Z succeeded');

Promise.any([promiseX, promiseZ, promiseY])
  .then((result) => {
    console.log(result); // Logs: "Y succeeded"
  });

// promise chanining 

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Data fetched'), 1000);
  })
}


const processData = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data + ' and processed'), 1000);
  })
}

const displayData = (data) => console.log(data);

fetchData()
  .then((result) => processData(result))
  .then((data) => displayData(data))
// TODO Promisify fetch

//  Create Wait function
const handleData = async () => {
  try {
    const data = await fetchData();
    const pData = await processData(data);
    displayData(pData);
  } catch (error) {
    
  }

}
handleData();

const promisifyTimeout = (delay) => new Promise((resolve, reject) => {
   setTimeout(() => {
    console.log('waiting ')
   return resolve('3 seconds have been passed');
  }, delay);
})

async function run() {
  console.log('Waiting for 3 seconds...');
  const result = await promisifyTimeout(13000); // Pause execution here
  console.log(result); // Logs: "3 seconds have passed"
}
run();
// const promisifyTimeout = (delay) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('waiting');
//       return resolve('3 seconds have been passed');
//     }, delay);
//   });

// async function run() {
//   console.log('Waiting for 3 seconds...');
//   const result = await promisifyTimeout(3000); // Pass 3000 ms (3 seconds) here
//   console.log(result); // Logs: "3 seconds have been passed"
// }
// run();