import { ListNode } from "./linked-list/medium/Add Two Numbers";
import swapPairs from "./linked-list/medium/Swap Nodes in Pairs";

const date = new Date().getTime()

console.log(swapPairs(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))));

console.log("time complexity: " + (new Date().getTime() - date));