// Task 1071. Greatest Common Divisor of Strings
// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times). 
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.


// Algo: check if the concatenations of str1 and str2 in different orders are the same. If so – return "". So. 
// Both the strings are made of same substring added multiple times.
// Then calculate the GCD using binary Euclidean algorithm.

function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) return '';
  const gcd = (a: number, b: number) => (0 === b ? a : gcd(b, a % b));
  return str1.substring(0, gcd(str1.length, str2.length));
};

// Time complexity: O(m+n), where n & m = are strings lengths
// Space complexity: O(m+n)
