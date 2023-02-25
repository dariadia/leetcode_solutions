// Task 1675. Minimize Deviation in Array
// You are given an array nums of n positive integers.
// You can perform two types of operations on any element of the array any number of times:
// If the element is even, divide it by 2.
// For example, if the array is [1,2,3,4], then you can do this operation on the last element, and the array will be [1,2,3,2].
// If the element is odd, multiply it by 2.
// For example, if the array is [1,2,3,4], then you can do this operation on the first element, and the array will be [2,2,3,4].
// The deviation of the array is the maximum difference between any two elements in the array.
// Return the minimum deviation the array can have after performing some number of operations.

// Algo: backwards + max heap
// it's only possible to perform the multiply once (as the number will be even),
// but can potentially perform the division operation many times, 
// we start from the maximum value for each nums[i] and work downward.
// Find the max possible value for each nums[i], 
// then keep taking the largest one and dividing by 2 if it's even. 
// At each step, check to see if you've found a new best ans (highest value - lowest value). 
// If the largest number is odd, you can't divide it by 2, 
// which means it's impossible to reach a better number than you've already found, so return your best ans.
 
 
 var minimumDeviation = function(nums) {
    let len = nums.length
    // we need the smallest value of nums
    let min = Infinity
    let heap = new Uint32Array(len+1)
    // heap index point
    let hix = 1
    heap[0] = 2e9

    const heapify = val => {
        let i = hix, par = i >> 1, temp
        heap[hix++] = val
        while (heap[par] < heap[i]) {
            temp = heap[par], heap[par] = heap[i], heap[i] = temp
            i = par, par = i >> 1
        }
    }

    const extract = () => {
        let max = heap[1], left, right, temp,
            i = 1, child = heap[3] > heap[2] ? 3 : 2
        heap[1] = heap[--hix], heap[hix] = 0
        while (heap[i] < heap[child]) {
            temp = heap[child], heap[child] = heap[i], heap[i] = temp
            i = child, left = i << 1, right = left + 1
            child = heap[right] > heap[left] ? right : left
        }
        return max
    }
    
    // First, we iterate through nums, 
    // multiply any odd numbers by 2, then insert 
    // them into heap or pq while making sure to update min if necessary.

    for (let i = 0, n = nums[0]; i < len; n = nums[++i]) {
        if (n % 2) n *= 2
        if (n < min) min = n
        heapify(n)
    }
    let curr = extract(), ans = curr - min
    
    // Then, while the largest value in heap/pq is even, 
    // we can take it out, divide it by 2, 
    // update our ans and min if necessary, 
    // and reinsert it back into the heap/pq.
    // Once we reach an odd number at the top of heap/pq, return the best ans.
    while (curr % 2 === 0) {
        curr /= 2
        if (curr < min) min = curr
        heapify(curr)
        curr = extract()
        ans = Math.min(ans, curr - min)
    }
    return ans
};
