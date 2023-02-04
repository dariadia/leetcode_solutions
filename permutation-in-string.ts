// Task 567. Permutation in String
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.

// Algo: sliding window. 
// 1. Iterate through s2 and keep expanding window until all characters in s1 occur in the window.
// 2. If we encounter a point where all characters occur in the window, we check
// if window's length is equal to s1.length. If so, we return true. Else, we advance `start` and reduce size of window.
// 3. As we reduce size of window, our window may no longer contain all characters of s1.
// Then, we go back to step(1) and repeat the process. We do this until the end of array.

function checkInclusion(s1: string, s2: string): boolean {
  // If s1 is larger than s2 then match is not possible
  if (s1.length > s2.length) return false; 
  
  let chars = new Array(26).fill(-Infinity);
  let start = 0, distinct = 0; // number of distinct chars to collect
  
  for (let i = 0; i < s1.length; i++) {
        let idx = s1.charCodeAt(i) - 97;
        chars[idx] = chars[idx] === -Infinity ? 1 : chars[idx]+1;
        if (chars[idx] === 1) distinct++;
    }
    for (let end = 0; end < s2.length; end++) {
        let endIdx = s2.charCodeAt(end) - 97;
        if (chars[endIdx] !== -Infinity) {
            chars[endIdx]--;
            if (chars[endIdx] === 0) distinct--;
        }
        while (start <= end && distinct === 0) {
            if (end-start+1 === s1.length) {
                return true;
            }
            let startIdx = s2.charCodeAt(start) - 97;
            if (chars[startIdx] !== -Infinity) {
                chars[startIdx]++;
                if (chars[startIdx] === 1) distinct++;
            }
            start++;
        }
};
    
// Time complexity: O(M+N), M = length of s1, N = length of s2
// Space complexity: O(1). Constant space is used.
