import mergeKLists from "./linked-list/hard/Merge k Sorted Lists";
import { ListNode } from "./linked-list/medium/Add Two Numbers";

const array : Array<ListNode | null> = [
    new ListNode(1, new ListNode(4, new ListNode(5))),
    new ListNode(1, new ListNode(3, new ListNode(4))),
    new ListNode(2, new ListNode(6))
]

const date = new Date().getTime()

console.log(mergeKLists(array));

console.log("time complexity: " + (new Date().getTime() - date));