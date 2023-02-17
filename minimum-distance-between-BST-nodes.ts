// Task 783. Minimum Distance Between BST Nodes
// Given the root of a Binary Search Tree (BST), 
// return the minimum difference between the values of any two different nodes in the tree.

// Algo: init the minDistance to MAX_VALUE possible; 
// this is the variable to store the minimum difference.
// Initialize prevValue to null, so we can check if we have already traversed any elements before or not.
// Perform an in-order traversal of the binary search tree. 
// Each time we iterate over a node, check if prevValue is not null and if it is not, 
// find its difference with the current node value and update minDistance accordingly.
// After iterating over the current node, assign it to prevValue.

function minDiffInBST(root: TreeNode | null): number {
  let prev = null;
  let minDistance = Infinity;

  function traverse(node: TreeNode): TreeNode {
    if (!node) return
    traverse(node.left);
    if (prev != null) {
      minDistance = Math.min(minDiff, node.val - prev);
    }
    prev = node.val;
    traverse(node.right);
  }

  traverse(root);
  return minDistance;  
};

// Time complexity: O(N), N - nodes in the tree
// Space complexity: O(H), 
// H- height if the tree, to store the stack calls, worst case - it'll be the number of nodes
