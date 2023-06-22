import validParentheses from "../easy/valid_parentheses";

export default function longestValidParentheses(str: string){
    let longest: number = 0;
    for(let i= 0; i < str.length; i++){
        for(let j = i + 1; j <= str.length; j++){
            console.log(str.slice(i, j));
            console.log(validParentheses(str.slice(i, j)));
            console.log(j);
            
            if(validParentheses(str.slice(i, j))){
                j - i > longest && (longest = j - i);
            }
        }
    }
    return longest;
}

// let str2 = "";
// let matches: number = 0;
// let longest = 0;
// for(let i = 0; i < str1.length; i++){
//     const val1 = str1.charAt(i);
//     console.log(": " + str2);
    
//     if(val1 == '('){
//         str2 += ')';
//         continue;
//     } else if (val1 == '['){
//         str2 += ']';
//         continue;
//     } else if (val1 == '{'){
//         str2 += '}';
//         continue;
//     }

//     if(
//         (val1 == ')' || val1 == '}' || val1 == ']') && 
//         val1 != str2.charAt(str2.length - 1)
//     ){            
//         matches * 2 > longest && (longest = matches * 2);
//         matches = 0;
//         str2 = '';            
//         continue;
//     }

//     if(val1 == str2.charAt(str2.length - 1)){
//         matches ++;
//         str2 = str2.slice(0, -1); 
//     }
// }
// matches * 2 > longest && (longest = matches * 2);

// return longest;


// if((val1 == ")" && val2 != "(") || (val1 == "]" && val2 != "[") || (val1 == "}" && val2 != "{")){
//     longest = str2.length;            
//     str2 = "";
//     break;
// }
// str2 += val1;