export default function lengthOfLongestSubstring(str: string): number {
    let max = 0;
    let start = 0;    

    for(let i = 1; i < str.length; i++){        
        for (let j = i - 1; j >= start; j--){
            if(str.charAt(i) == str.charAt(j)){
                if(max < i - start){
                    max = i - start;
                    // console.log(i + " - " + start + " = " + (i - start));
                    
                }
                start = j +1;
                // console.log( j + " + 1 = " + (j+1));
                
                break;
            }
        }
    }

    if(max < (str.length) - start){
        max = (str.length) - start;
        
    }

    return max;
};