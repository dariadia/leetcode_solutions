// Task 912. Sort an Array
// Given an array of integers nums, sort the array in ascending order and return it.
// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

// Algo: merge sort

function sortArray(nums: number[]): number[] {
    if (nums.length === 1) return nums
    
    let mid: number = Math.floor(nums.length / 2)
    let left = nums.splice(0, mid)
    
    return merge(sortArray(left), sortArray(nums))
};

const merge = (left: number[], right: number[]): number[] => {
    let arr: number[] = []
    
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            arr.push(left.shift())
        } else arr.push(right.shift())
    }
    
    return [...arr, ...left, ...right]
}
                               
// Time complexity: O(nlog(n))
// Space complexity: O(n)
