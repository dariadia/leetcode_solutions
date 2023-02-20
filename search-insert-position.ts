// Task 35. Search Insert Position
// Given a sorted array of distinct integers and a target value, 
// return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Algo: binary search

function searchInsert(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length;
    while (low < high) {
        let middle = low + Math.floor((high - low) / 2); 
        if (target > nums[middle]) low = middle + 1 
        else high = middle
    }
    return low;
}
      
// Time Complexity: O(log n)
// Space Complexity: O(1)
