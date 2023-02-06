// Task 1470. Shuffle the Array
// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Algo: Build an array result of size 2 * n.
// Iterate over the nums array ranging from indices 0 to n - 1:
// Store the element nums[i] at index 2 * i and nums[i + n] at index 2 * i + 1
// Return the result array.

function shuffle(nums: number[], n: number): number[] {
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(nums[i],nums[i+n]);
    }
    return res;
};

// Time complexity: O(n)
// Space complexity: O(1)
