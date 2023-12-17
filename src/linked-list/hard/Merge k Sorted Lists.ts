import { ListNode } from "../medium/Add Two Numbers";

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const newList = new ListNode();
    let currNode: ListNode | null = newList;

    while (true) {
        let min = null;
        let j: number = 0;
        for (let i = 0; i < lists.length; i++) {
            if (min == null || (lists[i] != null && lists[i].val < min.val)) {
                j=i
                min = lists[i];
            }
        }

        
        if(!min ) break;
        

        currNode.next = new ListNode(min.val);
        currNode = currNode.next;
        lists[j] = min.next;
    }

    return newList.next;
};

export default mergeKLists;

function logLists(lists: Array<ListNode | null>){
    lists.forEach(list => {
        let currNode: ListNode | null = list;
        while(currNode != null){
            console.log(currNode.val);
            currNode = currNode.next;
            // console.log("-");

        }
    });
    
}

function logList(list: ListNode){
    let currNode: ListNode | null = list;
    while(currNode != null){
        console.log(currNode.val);
        currNode = currNode.next;
        // console.log("-");

    }
}