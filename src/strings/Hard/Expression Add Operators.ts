export function addOperators(num: string, target: number): string[] {

    return ['']
}
//     export function addOperators(num: string, target: number): string[] {
//     const numArray = num.split('').map((value) => parseInt(value));
//     const currentValue = numArray.shift();
//     return recursive(numArray, currentValue+'', currentValue, target);
// };

// function recursive(num: Array<number>, currentStr: string, currentValue: number, target: number): Array<string>{

//     if( target == currentValue ){
//         if( num.length == 0 ){
//             return [currentStr];
//         } else {
//             return [];
//         }
//     } 
//     if( num.length == 0 ){
//         return [];
//     }

//     const array = [ ...tryPlus(num.slice(), currentStr, currentValue, target), ...tryMultiply(num.slice(), currentStr, currentValue, target) ];
//     console.log(array);
    
//     return array
// }

// function tryPlus(num: Array<number>, currentStr: string, currentValue: number, target: number): Array<string>{
//     const currentNum = num.shift();
//     const newStr = currentStr + '+' + currentNum;
//     const newCurrentValue = currentValue + currentNum;
//     return recursive(num, newStr, newCurrentValue, target);
// }

// function tryMultiply(num: Array<number>, currentStr: string, currentValue: number, target: number): Array<string>{
//     const currentNum = num.shift();
//     const newStr = currentStr + '*' + currentNum;
//     const newCurrentValue = currentValue * currentNum;
//     return recursive(num, newStr, newCurrentValue, target);
// }

// function tryMinus(num: Array<number>, currentStr: string, currentValue: number, target: number): string{
//     const currentNum = num.shift();
//     const newStr = currentStr + '-' + currentNum;
//     const newCurrentValue = currentValue - currentNum;
//     return recursive(num, newStr, newCurrentValue, target);
// }