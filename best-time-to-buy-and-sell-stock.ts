// Task 121. Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Algo: Brute Force is too costly
// One Pass - is better
// imagine a stocks graph
// The points of interest are the peaks and valleys in the given graph. 
// We need to find the largest price following each valley, 
// which difference could be the max profit. 
// We can maintain - minprice and maxprofit 

function maxProfit(prices: number[]): number {
  let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // our current profit

      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};

// Time complexity: O(n)
// Space complexity: O(1). Only two variables are used.
