
const order1 = ["business cards", "tshirt", "postcards"]; // m // 1000
const order2 = ["banner", "postcards", "pens", "business cards"]//  n  // 1000
//  ["business cards", "postcards"]

// o(n) ;  m // n is length of array traversing 
const findCommonProducts = (order1, order2) => {
  const commonOrders = [];
  let counter = 0;
  // for (let i = 0; i < order1.length; i++) {
  //   for (let j = 0; j < order2.length; j++) {
  //     counter++;
  //     if (order1[i] === order2[j]){
  //       commonOrders.push(order1[i]);
  //     }

  //   }

  // }

  const order1Set = new Set(order1);
  console.log(order1Set);
  
  order2.forEach(product => {
    counter++;
    if (order1Set.has(product)) {
      1
      commonOrders.push(product);
    }
  });
  console.log(counter);

  return commonOrders;
}

console.log(findCommonProducts(order1, order2));
