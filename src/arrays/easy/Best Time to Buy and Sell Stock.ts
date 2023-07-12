function maxProfit(prices: number[]): number {
    let max = 0;
    let minNumber = prices[0]
    for(let i = 1; i < prices.length; i++){
        minNumber = Math.min(minNumber, prices[i]);
        max = Math.max(max, prices[i] - minNumber)
    }
    return max;
};

export default maxProfit


// function maxProfit(prices: number[]): number {
//     let max = 0;
//     for(let i = 0; i < prices.length; i++){
//         let day2 = i
//         for(let j = i; j < prices.length; j ++){
//             if(prices[j] > prices[day2] ){
//                 day2 = j;
//             }
//         }
//         if(prices[day2] - prices[i] > max){
//             max = prices[day2] - prices[i]
//             console.log( prices[day2] + " - " + prices[i] + " = " + (prices[day2] - prices[i]));
            
//         }
//     }

//     return max;
// };