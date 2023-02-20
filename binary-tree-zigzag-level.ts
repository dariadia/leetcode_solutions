// Task 103. Binary Tree Zigzag Level Order Traversal
// Given the root of a binary tree, return the zigzag level 
// order traversal of its nodes' values. 
// (i.e., from left to right, then right to left for the next level and alternate between).

// Algo: keep a two-way stack, which means we can take from start/end
// (we can keep 2 usual stacks, but that's extra space)
// go through the tree, keep track of the level number

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  let res = [];
  go(root, 0, res);
  return res;
}

function go(node, level, res) { 
  if (!node) return;

  if (res[level] == null) res.push([]);

  if (level % 2 === 0) res[level].push(node.val);
  else res[level].unshift(node.val);

  go(node.left, level + 1, res);
  go(node.right, level + 1, res);
};

// Time Complexity: O(n) 
// Space Complexity: O(n)
