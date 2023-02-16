// Task 989. Add to Array-Form of Integer
// The array-form of an integer num is an array representing its digits in left to right order.
// For example, for num = 1321, the array form is [1,3,2,1].
// Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

// Algo: add numbers in a schoolbook way, column by column.
// with "carry"

var addToArrayForm = function(num, k) {

    let i = num.length - 1;
    let res = [];
    while(i >= 0 || k >0 ){
		// this is the general check : taking the last elemnt and adding it with the k value then take the carry(if any to the next iteration) 
        if(i >= 0){
            res.push((num[i] + k) % 10);
            k = Math.trunc((num[i] + k) / 10);
			     i--;	
       } 
		//this else block will handle the edge case when we need to increase the array length based on k value
		else {
            res.push( k % 10);
            k = Math.trunc(k / 10);
        }
    }
    return res.reverse();  
}

// Time Complexity: O(max⁡(N,log⁡K)) where N is the length of A.
// Space Complexity: O(max⁡(N,log⁡K))
