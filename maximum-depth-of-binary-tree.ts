// Task 104. Maximum Depth of Binary Tree
// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along 
// the longest path from the root node down to the farthest leaf node.

// Algo: recursiv

function maxDepth(root: TreeNode | null): number {
    if(!root) return 0;
    return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
};

// the maximum depth of a binary tree is the maximum number of steps to reach a leaf node from the root node.
// Time: we visit each node exactly once, O(N), where N is the number of nodes.
// Space complexity: in the worst case, the tree is completely unbalanced,
// e.g. each node has only left child node, the recursion call would occur N times (the height of the tree), 
// therefore the storage to keep the call stack would be O(N). 
// But in the best case (the tree is completely balanced), the height of the tree would be log(N). 
// Therefore, the space complexity in this case would be O(log(N)).
