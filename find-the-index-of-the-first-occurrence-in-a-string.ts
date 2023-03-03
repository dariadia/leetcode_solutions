// Task 28. Find the Index of the First Occurrence in a String
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Algo: can use Sliding Window, but worst case 
// Time complexity: O(nm) (e.g. "aaaaaaaaaa" to "aab"), space O(1)

function strStr(haystack: string, needle: string): number {
  if (!needle.length) return 0
  if (!haystack.includes(needle)) return -1
  return haystack.split(`${needle}`)[0].length
}

function strStr(haystack: string, needle: string): number {
  if (needle === '' || needle === haystack) return 0
  if (haystack.length < needle.length) return -1

  // start looping through haystack until the remaining substring is shorter than needle
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    // as soon as we see a character that matches the first character of needle
    if (haystack[i] === needle[0]) {
      // start looping through both needle and haystack
      for (let j = 0; j < needle.length; j++) {
        // as soon as the characters dont match
        if (needle[j] !== haystack[i + j]) break
        else if (j === needle.length - 1) return i
      }
    }
  }

  return -1
}
                                        
// Time complexity: O(n x m) n- string length, m - substring length
// Space O(1)
