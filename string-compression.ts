// Task 443. String Compression
// Given an array of characters chars, compress it using the following algorithm:
// Begin with an empty string s. For each group of consecutive repeating characters in chars:
// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.
// After you are done modifying the input array, return the new length of the array.
// You must write an algorithm that uses only constant extra space.

// Algo: two pointers i and j 
// to iterate through the input array. 
// Keep track of consecutive characters, 

function compress(chars: string[]): number {
 let i = 0;
  let j = 0;
    while (j < chars.length) {
// "count" keeps track of the number of consecutive 
// characters that are equal to the current character curr.
        let count = 0;
        let curr = chars[j];
        while (j < chars.length && chars[j] === curr) {
            j++;
            count++;
        }
        chars[i++] = curr;
// When a new character is encountered, 
// the current character and its count (if greater than 1) 
// are written to the output array using the chars 
// array and the i pointer.

        if (count > 1) {
            for (let digit of count.toString()) {
                chars[i++] = digit;
            }
        }
    }
// which represents the length of the compressed array.
    return i;
};

// Time complexity: O(n)
// Space complexity: O(1)
