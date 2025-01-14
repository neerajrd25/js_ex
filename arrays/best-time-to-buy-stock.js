const prices = [7, 1, 5, 3, 6, 4];
// 2 pointers



const maximiseProfit = () => {
  let buy = 0, sell = 1;

  let profit = 0; // to hold the max profit we can make

  while (sell < prices.length) {
    // buying price is less than sell
    if (prices[buy] < prices[sell]) {
      // try to sell and check if sell-buy will result in profit greater than previous profit in a single transaction
      profit = Math.max(profit, prices[sell] - prices[buy]);
    } else {
      // try to buy on this day
      buy = sell;
    }
    // increment the day 
    sell++ // dont change buy
  }

  return profit;
}

console.log(maximiseProfit());
