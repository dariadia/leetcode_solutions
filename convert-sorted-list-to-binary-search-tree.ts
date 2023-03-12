// Task 109. Convert Sorted List to Binary Search Tree
// Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// Algo: recursive
// count tree nodes
// recurse to build the tree

function sortedListToBST(head: ListNode | null): TreeNode | null {
// we need to have our list pointer (curr) have global scope
// for recursion to work correctly
    let curr = head, count = 0

  // we need to ensure that roughly half of the total number of nodes 
  // are on either side of the root
  // find the total number
    while (curr) curr = curr.next, count++

// define our recursive helper using index numbers
// we won't be able to access the listnodes directly by index
// we can take advantage of an inorder tree traversal
    const treeify = (i, j) => {
        if (j < i) return null
                  
        // same as Math.floor((i+j)/2)
        let mid = i + j >> 1;

// we recursively process the left subtree, then process the middle node, 
// then recursively process the right subtree.
        let node = new TreeNode();
        node.left = treeify(i, mid - 1)
        node.val = curr.val, curr = curr.next
        node.right = treeify(mid + 1, j)
        return node
    }
          
    curr = head
    return treeify(1, count)
};

// Time Complexity: O(n)
// Space Complexity: O(log n) due to the recursion stack
