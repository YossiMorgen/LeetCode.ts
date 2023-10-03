import { numIdenticalPairs } from "./arrays/easy/goodPairs";

const date = new Date().getTime()

const array = [1,1,1,1]
console.log(numIdenticalPairs(array));

console.log("time complexity: " + (new Date().getTime() - date));