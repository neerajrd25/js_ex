function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};
console.log(Person.prototype);

const alice = new Person("Alice");
Person.prototype.greet = function() {
  console.log(`Hi, I’m ${this.name}`);
};
const alice2 = new Person("Alice2");

alice.greet();
alice2.greet();

const obj = {
  name: "Bob",
  greet: function () {
    console.log(`Hi, I’m ${this.name}`);
  },
};

const greet = obj.greet;
greet(); // this.name will be undefined
obj.greet(); // prints name.
const {greet: newGreet } = obj;
newGreet(); // same here undefined
// Moral this is determined dyamcially 

newGreet.bind({ name: 'neeraj'})() // prints neeraj
console.log('------- this and arrow-----');


const arrowObj = {
  name: "Alice",
  greet: function () {
    setTimeout(() => {
      // console.log('setTimeout ', this);
      console.log('settimeout ', this.name);
    }, 1000);
  },
  normalGreet : function(){
    // console.log('normal ', this);
    console.log('normal greet ', this.name);
  },
  arrowGreet: ()=> {
    // console.log('arrow ', this);
    console.log('arrow  greet ', this.name);
  }
};

arrowObj.greet();
arrowObj.normalGreet();
arrowObj.arrowGreet();
