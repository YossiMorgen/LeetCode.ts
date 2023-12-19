import imageSmoother from "./arrays/easy/Image Smoother";

const date = new Date().getTime()

const matrix = [[100,200,100],[200,50,200],[100,200,100]];

console.log(imageSmoother(matrix));


console.log("time complexity: " + (new Date().getTime() - date));