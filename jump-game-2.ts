// Task 45. Jump Game II
// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].
// Each element nums[i] represents the maximum length of a forward jump from index i. 
// In other words, if you are at nums[i], you can jump to any nums[i + j] where:
// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

// Algo: We know that every point is reachable, 
// so we are only looking for the relationship 
// between the maximum reach of each index and the number of jumps.
// oldMax is the previous jump's maximum reach, 
// if we are at the old max, that means no matter how we move, 
// the next move will cost an extra jump, thus we increment jump, 
// at the same time, we update the oldMax to the current global max. 
// This max, indicates the maximum reach we will have by having an extra jump.

// Initialize newMax, oldMax, jump (is our answer)
// Interate over nums, for each index i, the farthest index we can reach from i is i + nums[i]. So update
// If i = oldMax, it means we have finished the current jump, 
// and should move on to the next jump. 
// Increment jump, and set oldMax = newMax as the furthest we can reach with the next jump. Repeat

function jump(nums: number[]): number {
    let newMax = 0;
    let jump = 0;
    let oldMax = 0;
    for (let i=0;i<nums.length-1;i++) {
        newMax = Math.max(newMax, i+nums[i]);
        if (i == oldMax) {
            jump++;
            oldMax = newMax;
        }
    }
    return jump;
};

// Time complexity: O(n)
// Space complexity: O(1), we keep 3 variables at all times
