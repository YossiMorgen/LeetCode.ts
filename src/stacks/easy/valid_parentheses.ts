import SimpleStack from "../stackModel";

export default function validParentheses(s: string){
    
    const stack = new SimpleStack(Math.floor(s.length / 2));
    let bool = true;

    for(let i = 0; i < s.length; i++){
        let val = s.charAt(i);
        if((val == ")" && stack.peek() == "(") || (val == "]" && stack.peek() == "[") || (val == "}" && stack.peek() == "{")){
            stack.pop();
            continue;
        }
        if((val == ")" && stack.peek() != "(") || (val == "]" && stack.peek() != "[") || (val == "}" && stack.peek() != "{")){
            bool = false;
            break;
        }
        stack.push(val)
    }

    if(stack.peek()) bool = false;

    return bool;
}


