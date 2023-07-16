import { ListNode, addTwoNumbers } from "./linked-list/medium/Add Two Numbers";

const date = new Date().getTime()

const ln = new ListNode(0);

const ln2 = new ListNode(0);

const l3 = addTwoNumbers(ln, ln2)
l3.print()

// console.log(new Date().getTime() - date);
