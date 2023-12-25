import widthOfBinaryTree from "./Trees/medium/Maximum Width of Binary Tree";
import TreeNode from "./Trees/tree-node";

const tree = new TreeNode(1, 
    new TreeNode(3,
        new TreeNode(5),
        new TreeNode(3)),
    new TreeNode(2,
        null,
        new TreeNode(9)
    )
);
        

const date = new Date().getTime()

console.log(widthOfBinaryTree(tree));

console.log("time complexity: " + (new Date().getTime() - date));