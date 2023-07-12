// still in prosess
class Letter{
    letter: string;
    index: number;
}

export default function longestValidParentheses(str: string){
    let stack = new SimpleStack(Math.ceil(str.length / 2));
    let longest = 0;
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            const val = str.charAt(j);
            console.log(val);
            console.log(stack);

            if(val == '('){
                stack.push({letter: ')', index: j});
                continue;
            } else if (val == '['){
                stack.push({letter: ']', index: j});
                continue;
            } else if (val == '{'){
                stack.push({letter: '}', index: j});
                continue;
            }
        
            if(
                (val == ')' || val == '}' || val == ']') && 
                val != stack.peek()?.letter
            ){            
                (stack.stack[0]?.index - i) > longest && (longest = stack.stack[0]?.index - i)
                stack.clearStack();            
                continue;
            }
        
            if(val == stack.peek()?.letter){
                stack.pop(); 
            }
            if(j >= str.length){
                i = str.length;
                break;
            }
        }
    }
        
    return longest;
}


class SimpleStack {
    stack: Array<Letter>;
    private headIndex = -1;

    public constructor(capacity: number){
        this.stack = new Array(capacity);
    }

    public push(val: Letter){
        this.headIndex ++;
        this.stack[this.headIndex] = new Letter();
        this.stack[this.headIndex].index = val.index;
        this.stack[this.headIndex].letter = val.letter;
    }

    public peek(){
        return this.stack[this.headIndex];
    }

    public pop(){
        if(this.headIndex == -1) return;
        delete this.stack[this.headIndex];
        this.headIndex--;
    }

    public clearStack(){
        while(this.headIndex > -1){
            this.pop();
        }
    }
}

// let longest: number = 0;
// for(let i= 0; i < str.length; i++){
//     for(let j = i + 1; j <= str.length; j++){
//         console.log(str.slice(i, j));
//         console.log(validParentheses(str.slice(i, j)));
//         console.log(j);
        
//         if(validParentheses(str.slice(i, j))){
//             j - i > longest && (longest = j - i);
//         }
//     }
// }
// return longest;




// if((val1 == ")" && val2 != "(") || (val1 == "]" && val2 != "[") || (val1 == "}" && val2 != "{")){
//     longest = stack.length;            
//     stack = "";
//     break;
// }
// stack += val1;