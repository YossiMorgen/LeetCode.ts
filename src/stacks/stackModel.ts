export default class SimpleStack {
    stack: any;
    private headIndex = -1;

    public constructor(capacity: number){
        this.stack = new Array(capacity);
    }

    public push(val: any){
        this.headIndex ++;
        this.stack[this.headIndex] = val
    }

    public pushString(s: string){
        for(let i = 0; i < s.length; i++){
            this.stack[i + this.headIndex + 1] = s.charAt(i);
        }
        this.headIndex += s.length;
    }

    public peek(){
        return this.stack[this.headIndex];
    }

    public pop(){
        if(this.headIndex == -1) return;
        const output = this.stack[this.headIndex];
        delete this.stack[this.headIndex];
        this.headIndex--;
        return output;
    }

    public printAll(){
        for(let i = 0; i <= this.headIndex; i++){
            console.log(this.stack[this.headIndex]);
        }
    }

    public clearStack(){
        while(this.headIndex > -1){
            this.pop();
        }
    }
}
