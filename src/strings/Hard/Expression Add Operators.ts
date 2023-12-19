export function addOperators(num: string, target: number): string[] {
    return recursion(num, num[0], 1, target);
}

function recursion(num: string, currentString: string, index: number, target: number): string[]{
    if( index == num.length ){
        if( target == eval(currentString) ){
            return [currentString];
        } else {
            return [];
        }
    }
    const array = [ 
        ...tryMultiply(num, currentString, index, target), 
        ...tryPlus(num, currentString, index, target), 
        ...tryMinus(num, currentString, index, target),
        ...tryConnect(num, currentString, index, target)
    ];
    
    return array
}

function tryAnything(num: string, target: number, currentString: string, index: number, operation: string): string[]{
    const currentNum = num[index];
    const newString = currentString + operation + currentNum;
    return recursion(num, newString, index+1, target);
}

function tryPlus(num: string, currentString: string, index: number, target: number): string[]{
    const currentNum = num[index];
    const newString = currentString + '+' + currentNum;
    return recursion(num, newString, index+1, target);
}

function tryMultiply(num: string, currentString: string, index: number, target: number): string[]{
    const currentNum = num[index];
    const newString = currentString + '*' + currentNum;
    return recursion(num, newString, index+1, target);
}

function tryMinus(num: string, currentString: string, index: number, target: number): string[]{
    const currentNum = num[index];
    const newString = currentString + '-' + currentNum;
    return recursion(num, newString, index+1, target);
}

function tryConnect(num: string, currentString: string, index: number, target: number): string[]{
    const currentNum = num[index];
    const c = currentString[currentString.length-2]
    if(currentString[currentString.length-1] == '0' && !(c >= '0' && c <= '9')) return [];
    const newString = currentString + currentNum;
    return recursion(num, newString, index+1, target);
}


// this one doesn't have order of operations
// export function addOperators(num: string, target: number): string[] {
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