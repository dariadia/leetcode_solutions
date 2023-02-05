// Task 438. Find All Anagrams in a String
// Given two strings s and p, return an array of all the start indices of p's anagrams in s.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Algo: 
// Build a hash map of characters and their counts. Save the N of unique characters as uniqueChars
// Iterate the input s using 2 pointers left and right. Make adjustments in map and uniqueChars
// Keep expanding the right pointer. 
// When the desired searching length is reached, we can start shrinking left pointer as well.
// the left pointer, at max, would only move 1 position.

function findAnagrams(s: string, p: string): number[] {
    let hash = {},  uniqueChars = 0;
    for (let c of p) {
        if (hash[c] === null) {
            uniqueChars++;
            hash[c] = 1;
        } else hash[c]++;
    }
    
    let res = [];
    let left = 0, right = 0;
    for (right;right<s.length;right++) {
        if (hash[s[right]] !== null) hash[s[right]]--;
        if (hash[s[right]] === 0) uniqueChars--;
        if (uniqueChars === 0) res.push(left);
        if (right - left + 1 == p.length) {
            if (hash[s[left]] !== null) hash[s[left]]++;
            if (hash[s[left++]] === 1) uniqueChars++;
        }
    }
    return res;
};
                                       
// O(N)
