
export class ListNode {
    val: number
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
        
    }



    addNode(val: number, currNode: ListNode | null = this){
        if(currNode.next == null ){
            currNode.next = new ListNode(val)
        }else{
            currNode.next.addNode(val)
        }
        
    }

    print(){
        let currNode: ListNode | null = this;
        while(currNode != null){
            console.log(currNode.val);
            currNode = currNode.next;
        }
    }
}
 
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const l3 = new ListNode();

    recursion(l1, l2, l3);

    return l3
};

function recursion(l1: ListNode | null, l2: ListNode | null, l3: ListNode | null, number = 0){
    const val = ((l1?.val || 0) + (l2?.val || 0)) + number
    l3.val += val % 10 
    
    if(l1?.next || l2?.next){
        l3.next = new ListNode()
        recursion(l1?.next || null, l2?.next || null, l3.next, Math.floor(val / 10))
    } else if (Math.floor(val / 10)){
        l3.next = new ListNode(1)
    }
}
