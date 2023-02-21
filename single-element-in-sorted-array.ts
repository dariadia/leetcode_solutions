// Task 540. Single Element in a Sorted Array
// You are given a sorted array consisting of only 
// integers where every element appears exactly twice, except for one element which appears exactly once.
// Return the single element that appears only once.

// Algo: binary Search

function singleNonDuplicate(nums: number[]): number {
    if (nums.length == 1) return nums[0];

    const go = (start, end) => {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] == nums[mid - 1]) 
          return mid % 2 ? bsa(mid + 1, end) : bsa(start, mid);
        if (nums[mid] == nums[mid + 1]) 
           return mid % 2 ? bsa(start, mid - 1) : bsa(mid, end);
        return nums[mid];
    }

    return go(0, nums.length - 1);
};
                        
// Time Complexity : O(log(n))
// Space Complexity : O(1)
