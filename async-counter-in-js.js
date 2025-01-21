const { log } = console;
{
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
log('------------- using let  --------------')
{
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}

log('------------- using closure  --------------')
{
  for (var i = 0; i < 5; i++) {
    (function (i) {
      setTimeout(() => {
        console.log('first ',i);
      }, 1000)
    })(i);
  }
}
log('------------- using async await  --------------')

{

}