import asteroidCollision from "./stacks/medium/AsteroidCollision";
import minSubArrayLen from "./arrays/medium/Minimum Size Subarray Sum";
import reverse from "./integers/medium/Reverse Integer";

const date = new Date().getTime()

console.log(asteroidCollision([5, 10, -5]));

console.log("time complexity: " + (new Date().getTime() - date));