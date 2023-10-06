import { removeDuplicateLetters } from "./strings/medium/Remove Duplicate Letters";

const date = new Date().getTime()

console.log(removeDuplicateLetters('cbacdcbc'));

console.log("time complexity: " + (new Date().getTime() - date));