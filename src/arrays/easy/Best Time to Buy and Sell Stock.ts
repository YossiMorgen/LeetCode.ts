function maxProfit(prices: number[]): number {
    let max = 0;

    for(let i = 0; i < prices.length; i++){
        for(let j = i; j < prices.length; j ++){
            if(prices[j] - prices[i] > max){
                max = prices[j] - prices[i];
                // console.log(prices[j] + " - " +  prices[i] + " = " + (prices[j] - prices[i]));
                
            }
        }
    }

    return max;
};

export default maxProfit