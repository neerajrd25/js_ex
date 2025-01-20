// 'use strict'
var user = {
  data: ['neeraj'],
  clickHandler: function (a) {
    console.log('Clicked ', this.data); // prints undefined in non strict mde
    if(a) console.log('a => ',a);
    
  }
}
{
  function userClicked(handler) {
    handler();
  }
  userClicked(user.clickHandler)
}

// fixed using bind
{
  console.log('fixed using bind');
  function userClicked(handler) {
    handler();
  }
  userClicked(user.clickHandler.bind(user, [31]))
}

// fixed using arrow function
{
  console.log('fixed using arrow');
  function userClicked(handler) {
    handler();
  }
  userClicked(()=> user.clickHandler())
}
// fixed using call
{
  console.log('fixed using call');

  function userClicked(handler){
    handler.call(user, [1]);
  }
  userClicked(user.clickHandler)

}
// fixed using apply
{
  console.log('fixed using apply');

  function userClicked(handler){
    handler.apply(user, [2]);
  }
  userClicked(user.clickHandler)

}

console.log(!!'false' === 'true')