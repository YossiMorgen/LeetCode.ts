import { ListNode } from "./Add Two Numbers";

function swapPairs(head: ListNode | null): ListNode | null {

    if (!head || !head.next) {
        return head;
    }
    
    const newHead = head.next;
    head.next = swapPairs(newHead.next);
    newHead.next = head;
    
    return newHead;
};

export default swapPairs;