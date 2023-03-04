// Task 2444. Count Subarrays With Fixed Bounds
// You are given an integer array nums and two integers minK and maxK.
// A fixed-bound subarray of nums is a subarray that satisfies the following conditions:
// The minimum value in the subarray is equal to minK.
// The maximum value in the subarray is equal to maxK.
// Return the number of fixed-bound subarrays.
// A subarray is a contiguous part of an array.

// Algo: sliding window
// to find all subarrays with minK and maxK. 
// We can keep track of the start index 
// of the current subarray and update it 
// whenever we encounter a value that is 
// less than minK or greater than maxK.
// When we find a subarray with both 
// minK and maxK, we can count the number of subarrays 
// that can be formed by taking the minimum index 
// of minK and maxK as the starting point and 
// the current index as the ending point.

function countSubarrays(nums: number[], minK: number, maxK: number): number {
   let sum = 0;
   let start = 0, minStart = 0, maxStart = 0;
   let minFound = false, maxFound = false;

   for (let i = 0; i < nums.length; i++){
       let num = nums[i]
                                   
// If the current value num is less than minK/greater than maxK, 
// set minFound and maxFound to false and update start to i+1.
       if (num < minK || num > maxK){
           minFound = false;
           maxf = false;
           start = i+1;
       }

// if => set minFound to true and update minStart to i.
       if (num === minK){
           minFound = true
           minStart = i;
       }

// If => set maxFound to true and update maxStart to i.
       if (num === maxK){
           maxf = true
           maxStart = i;
       }

// if both are true
       if (minFound && maxFound){
           sum += (Math.min(minStart, maxStart) - start+1)
       }
   } 

   return sum
};

// Time complexity: O(n)
// Space complexity: O(1)
