const person = {
  name: "Alice",
  age: 30,
  city: "New York",
  country: "USA"
};

const { name, ...rest2 } = person;
const updatedPerson = { ...rest2, city: "Los Angeles", profession: "Engineer" };

console.log(name);         // First log Alice 
console.log(rest2);         // Second log 30, NewYouk, USA 
console.log(updatedPerson); // Third log 30, NewYouk, USA , Engineer


// const obj  = {name:'Neeraj ', age: 23, address: {  city: 'Pune', state: 'MH'}};

// const {name, ...rest} = obj
// console.log(name);
// console.log(rest);

