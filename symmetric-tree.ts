// Task 101. Symmetric Tree
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Algo: go left-right, recursive 
// compare nodes

function isSymmetric(root: TreeNode | null): boolean {
    const helper = (left: TreeNode | null, right: TreeNode | null): boolean => {
        if (left === null && right === null) return true;
        if (left === null || right === null || left.val !== right.val) return false;
        return helper(left.left, right.right) && helper(left.right, right.left);
    }

    return helper(root.left, root.right);
};

// Time complexity: O(n)
// Space complexity: O(h), where h = height of tree
