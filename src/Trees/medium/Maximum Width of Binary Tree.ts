import TreeNode from "../tree-node";

function widthOfBinaryTree(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    const queue: { node: TreeNode, index: number }[] = [];
    queue.push({ node: root, index: 0 });
    let maxWidth = 0;

    while (queue.length > 0) {
        const levelSize = queue.length;
        const start = queue[0].index;

        for (let i = 0; i < levelSize; i++) {
            const { node, index } = queue.shift()!;
            const offset = index - start;

            if (node.left) {
                queue.push({ node: node.left, index: 2 * offset });
            }
            if (node.right) {
                queue.push({ node: node.right, index: 2 * offset + 1 });
            }
        }

        const end = queue.length > 0 ? queue[queue.length - 1].index : start;
        maxWidth = Math.max(maxWidth, end - start + 1);
    }

    return maxWidth;
}


export default widthOfBinaryTree;