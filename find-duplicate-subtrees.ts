// Task 652. Find Duplicate Subtrees
// Given the root of a binary tree, return all duplicate subtrees.
// For each kind of duplicate subtrees, you only need to return the root node of any one of them.
// Two trees are duplicate if they have the same structure with the same node values.

// Algo: represent tree with a map of subtree strings
// traverse, count, add to the map

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  const map = new Map(), res = []
  dfs(root, map, res)
  return res
};

function dfs(root, map, res){
  if(!root) return '#'
  const subtree = `${root.val}.${dfs(root.left,map,res)}.${dfs(root.right, map,res)}`
  map.set(subtree,(map.get(subtree)||0) + 1)
  if(map.get(subtree) === 2){
    res.push(root)
  }
  return subtree
}

// Time complexity: O(n)
// Space complexity: O(n)
