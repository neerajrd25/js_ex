const value1 = 'Mr John Smith     ';
const value2 = ' Mrs John  Smith';

const { log, time, timeEnd } = console;

const bruteForce = (arr) => {

  let temp = arr.trim();
  let space = '%20';
  let tempArr = [];
  for (const element of temp) {
    tempArr.push(element === ' ' ? space : element)
  }
  return tempArr.join('');
}

const optimised = (arr) => arr.trim().replace(/ /g, '%20');

const algoDriven = (arr) => {
  let temp = arr.trim();
  
  // calculate space for tempArr
  let spaceCount = 0;
  for (const element of temp) {
    if (element === ' ') spaceCount++;
  }
  let newArrLength = temp.length + spaceCount * 2; 
  // %20 means requires 3 charchter but since 1 is already accounted for space wwe nee need extra 2 charchter for each space
  // log(temp.length, spaceCount, newArrLength);
  let tempArr = new Array(newArrLength);

  for (let index = 0; index < temp.length;) {
    if (temp[index] === ' ') {
      tempArr[index++] = '%';
      tempArr[index++] = '2';
      tempArr[index++] = '0';
    } else {
      tempArr[index] = temp[index];
      index++;
    }
  }
  // for (const element of temp) {
  //   if (element === ' ') {
  //     tempArr.push('%');
  //     tempArr.push('2');
  //     tempArr.push('0'); // push creates array with double the length of original array
  //   } else tempArr.push(element)
  // }
  // log(tempArr.length)
  return tempArr.join('');


}

log('------------Start-----------------')
time('brute');
log(bruteForce(value1));
log(bruteForce(value2));
timeEnd('brute');


log('---------------------------------')

time('optimised');
log(optimised(value1));
log(optimised(value2));
timeEnd('optimised');

log('---------------------------------')

time('algoDriven');
log(algoDriven(value1));
log(algoDriven(value2));
timeEnd('algoDriven');

log('-------------END--------------------')
// Fastest if optimised but space efficient is algodriven