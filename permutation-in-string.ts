// Task 567. Permutation in String
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.

// Algo: sliding window. 
// Keep a track of the number of elements which were already matching 
// in the earlier hashmap and update just the count of matching elements 
// when shifting the window towards the right.



function checkInclusion(s1: string, s2: string): boolean {
  const chars = new Array(26).fill(0);

  const isPermutation = () => chars.every((char) => char === 0);

  for (const char of s1) {
    chars[char.charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < s2.length; i++) {
    chars[s2[i].charCodeAt(0) - 97]--;

    if (i >= s1.length) {
      chars[s2[i - s1.length].charCodeAt(0) - 97]++;
    }

    if (isPermutation()) return true;
  }

  return false;
};
    
// Time complexity: O(length1+(l2−l1))
// Space complexity: O(1). Constant space is used.
