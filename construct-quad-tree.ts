// Task 427. Construct Quad Tree
// Given a n * n matrix grid of 0's and 1's only. We want to represent the grid with a Quad-Tree.
// Return the root of the Quad-Tree representing the grid.
// Notice that you can assign the value of a node to True or False when isLeaf is False, and both are accepted in the answer.
// A Quad-Tree is a tree data structure in which each internal node has exactly four children. Besides, each node has two attributes:
// val: True if the node represents a grid of 1's or False if the node represents a grid of 0's.
// isLeaf: True if the node is leaf node on the tree or False if the node has the four children.

/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
 
// Algo: recursive
// If length is one, 
// return a new leaf node with value equal to the cell value at (x1, y1).
// Otherwise, make a recursive call to the four sub-matrices:
// If all the four nodes returned 
// by the above recursive calls are leaf nodes 
// with the same value. 
// Then return a new leaf node with the same value.
// Otherwise, return a non-leaf node 
// with any value having child pointers pointing 
// to the four above-returned nodes.

var construct = function(grid) {
    const len = grid.length;
    
    function split(matrix) {
        const [[rowStart, colStart], [rowEnd, colEnd]] = matrix;
        const halfWidth = (rowEnd - rowStart) / 2 
        const midRow = rowStart + halfWidth;
        const midCol = colStart + halfWidth;
        
        const topLeft = [[rowStart, colStart], [midRow, midCol]];
        const topRight = [[rowStart, midCol], [midRow, colEnd]];
        const bottomLeft = [[midRow, colStart], [rowEnd, midCol]];
        const bottomRight = [[midRow, midCol], [rowEnd, colEnd]]
        
        return {topLeft, topRight, bottomLeft, bottomRight}
    }
    
    function recurse(matrix) {
        const [[rowStart, colStart], [rowEnd, colEnd]] = matrix;
        
        if(rowEnd - rowStart === 1) return new Node(grid[rowStart][colStart], true)
        
        const {topLeft, topRight, bottomLeft, bottomRight} = split(matrix);
        
        const nodeTL = recurse(topLeft);
        const nodeTR = recurse(topRight);
        const nodeBL = recurse(bottomLeft);
        const nodeBR = recurse(bottomRight);
        
        // if all 4 quadrants are leaf nodes and have the same value 
        // they can be merge into one quadrant
        if(nodeTL.isLeaf && nodeTR.isLeaf && nodeBL.isLeaf && nodeBR.isLeaf && 
           (nodeTL.val === nodeTR.val && nodeTR.val === nodeBL.val && nodeBL.val === nodeBR.val))  {
            return new Node(nodeTL.val, true);
        }
        return new Node(false, false, nodeTL, nodeTR, nodeBL, nodeBR);
    }
    return recurse([[0, 0], [len, len]])
};

// Time: O(N * M) where N is number of rows and M is number of cols
// Space: O(Log N)
