// Task 226. Invert Binary Tree
// Given the root of a binary tree, invert the tree, and return its root.

// Algo: recursive
// go left & go right recursively
// swap current

function invertTree(root: TreeNode | null): TreeNode | null {
    // Base case...
    if (!root) return root

    // Call the function recursively for the left subtree...
    invertTree(root.left)

    // Call the function recursively for the right subtree...
    invertTree(root.right)

    // swapping process...
    const curr = root.left
    root.left = root.right
    root.right = curr
    return root 
};

time complexity is O(n), where n is the number of nodes, each visited once
space: O(h), where h - height of the tree (recursion calls), worst case h = n
