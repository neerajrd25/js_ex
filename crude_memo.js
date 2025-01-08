/** 
 * function mm() {
  let a, b;
  return f => x => a === x ? b : b = f(a = x)
}
  */

const { log } = console;
function mm() {
  let a, b;
  log('a, b ', a , b);
  return function (f) {
    // log('Inner Param  f', f.toString());
    return function (x) {
      log('Inner Param  x', x);
      if (a === x) {
        log('Inside If ', a)
        return b;
      }
      b = f(a = x); // this executes x => x * x 
      return b;
    }
  }
}



const f = mm(); // this is executed only once setting the closures
const g = f(x => x * x)

// console.log(mm.toString())
// console.log('F : ', f.toString())
// console.log('G : ', g.toString())
log(g(2));
log(g(2));
log(g(4));
log(g(2));
log(g(3));
log(g(3));

log(g(4));
