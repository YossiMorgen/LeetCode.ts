import canFinish from "./graphs/medium/Course Schedule";

const date = new Date().getTime()

console.log(canFinish(2, [[1,0],[0,1]]));

console.log("time complexity: " + (new Date().getTime() - date));