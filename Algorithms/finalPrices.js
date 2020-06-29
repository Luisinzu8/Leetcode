/**
 * @param {number[]} prices
 * @return {number[]}
 */
 /*
 Given the array prices where prices[i] is the price of the ith item in a shop. There is a special discount for items in the shop, if you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i], otherwise, you will not receive any discount at all.

Return an array where the ith element is the final price you will pay for the ith item of the shop considering the special discount.

example: Input: prices = [10,1,1,6]
		 Output: [9,0,1,6]
*/
let finalPrices = (prices) => {
    const stack = [];
    for(let i = 0; i < prices.length; i++) {
        const curr = prices[i];
        while(stack.length && prices[stack[stack.length - 1]] >= curr) {
            prices[stack.pop()] -= curr;
        }
        stack.push(i);
    }
    return prices;
};