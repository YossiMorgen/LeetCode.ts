// this file still not perfectly solved
export default function threeSum(numbers: number[]): Set<any> {
    // const array: Array<any> = Array();
    const mySet1 = new Set();

    // numbers.sort((a,b) => a - b);
    
    for(let i = 0; i < numbers.length - 2; i ++){
        if(numbers[i - 1] === numbers[i]) continue;
        for(let j = i + 1; j < numbers.length - 1; j++){
            for(let k = j + 1; k < numbers.length ; k++){
                const sum = numbers[i] + numbers[j] + numbers[k];

                if(sum > 0) {
                    if(i > 0){
                        return;
                    }
                    break;
                }
                if(sum === 0 ){   
                    mySet1.add([numbers[i], numbers[j], numbers[k]])  
                    // console.log(mySet1);
                             
                    // array.push([numbers[i], numbers[j], numbers[k]]);
                    break;
                }
            }
        }
        console.log(mySet1);
    }

    // for(const item of mySet1){
    //     array.push(item)
    // }
    console.log(mySet1);

    return mySet1;
};

// Time Limit Exceeded -------------------------------------
// const positiveArr: Array<number> = [];
// const negativeArr: Array<number> = [];

// numbers.forEach(function(item) {
// if (item < 0) {
//     const index = negativeArr.findIndex(x => item > x);
//     if(index === -1){
//         negativeArr.push(item);
//     }else{
//         negativeArr.splice(index, 0, item)
//     }
// } else {
//     const index = positiveArr.findIndex(x => x > item);
//     if(index === -1){
//         positiveArr.push(item);
//     }else{
//         positiveArr.splice(index, 0, item)
//     }
// }
// }); 


// for(let i = positiveArr.length - 1; i >= 0; i--){
//     if(positiveArr[i + 1] === positiveArr[i]) continue;
//     for(let j = negativeArr.length - 1; j >= 0 ; j--){
//         if(negativeArr[j + 1] === negativeArr[j]) continue;
        
//         for(let k = 0; k < i; k++){
//             if(positiveArr[i] + positiveArr[k] + negativeArr[j] === 0){
//                 array.push([negativeArr[j], positiveArr[k], positiveArr[i]])
//                 break;
//             }
//         }

//         for(let k = 0; k < j; k++){
//             if(positiveArr[i] + negativeArr[k] + negativeArr[j] === 0){
//                 array.push([negativeArr[j], negativeArr[k], positiveArr[i]])
//                 break;
//             }
//         }
//     }
// }

// if(positiveArr[0] === 0 && positiveArr[1] === 0 && positiveArr[2] === 0){
//     array.push([0,0,0])
// }


// Time Limit Exceeded -------------------------------------

 // numbers.sort((a,b) => a - b);

    // for(let i = 0; i < numbers.length - 2; i ++){
    //     if(numbers[i - 1] === numbers[i]) continue;
    //     for(let j = i + 1; j < numbers.length - 1; j++){
    //         for(let k = j + 1; k < numbers.length ; k++){
    //             const sum = numbers[i] + numbers[j] + numbers[k];
    //             // console.log(numbers[i] + ", " + numbers[j] + ", " + numbers[k]);
    //             console.log(sum);
                
    //             if(sum > 0) {
    //                 if(i > 0){
    //                     return;
    //                 }
    //                 break;
    //             }
    //             if(sum === 0 && ! (array[array.length - 1]?.[0] === numbers[i] && array[array.length - 1]?.[1] === numbers[j] && array[array.length - 1]?.[2] === numbers[k]) ){
    //                 console.log(numbers[i] + ", " + numbers[j] + ", " + numbers[k]);
                    
    //                 array.push([numbers[i], numbers[j], numbers[k]]);
    //                 break;
    //             }
    //         }
    //     }
    // }
