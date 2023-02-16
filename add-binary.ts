// Task 67. Add Binary
// Given two binary strings a and b, return their sum as a binary string.

// Algo: we can use built-in Bigin, but a cleaner solution is with "carry" 
// Start from the last element, do "school-like" math
  // 1st + 2nd + carry = sum, new carry, decimal sum
  //   0 +  0  + 0 = 0, 0 (0)
  //   0 +  0  + 1 = 1, 0 (1)
  //   0 +  1  + 1 = 0, 1 (2)
  //   1 +  1  + 1 = 1, 1 (3)

let addBinary = (a, b) => {
  let carry = 0;
  let result = '';

  let len1 = a.length - 1;
  let len2 = b.length - 1;

  for (; len1 >= 0 || len2 >= 0 || carry > 0; len1--, len2--) {
    let sum = (+a[len1] || 0) + (+b[len2] || 0) + carry;
    if (sum > 1) {
      sum = sum % 2;
      carry = 1;
    } else {
      carry = 0;
    }
    result = `${sum}${result}`;
  }
  return result;
};
      
// Time complexity: O(N)
// Space complexity: O(1)
