// Task 1523. Count Odd Numbers in an Interval Range
// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

// Algo: maths
// Check if low is even && high is even
// Yes => return (high - low) / 2 + 1
// No: return the middle count

var countOdds = function(low, high) {
	const mid = Math.round((high-low) / 2);//

  return low % 2 === 1 && high % 2 === 1 ? mid + 1 : mid;
}


// Time complexity: O(1)
// Space complexity: O(1)
