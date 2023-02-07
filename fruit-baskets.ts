// Task 904. Fruit Into Baskets
// You are visiting a farm that has a single row of fruit trees arranged from left to right. 
// The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.
// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:
// You only have two baskets, and each basket can only hold a single type of fruit. 
// There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. 
// The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

// Algo: sliding-Window
// Start with an empty window with left and right as its left and right index.
// We iterate over right and add fruits[right] to this window.
// If the number is no larger than 2, meaning that we collect no more than 2 types of fruits, this subarray is valid.
// Otherwise, it is not the right time to expand the window and we must keep its size. 
// Since we have added one fruit from the right side, 
// we should remove one fruit from the left side of the window, and increment left by 1.
// Once we are done iterating, the difference between left and right stands for the longest valid subarray we encountered, 
// i.e. the maximum number of fruits we can collect.

function totalFruit(fruits: number[]): number {
    const hashMap = new Map();
    let left = 0, maxLen = 0;
	 for (let right = 0; right < fruits.length; right++) {
		const rightFruit = fruits[right];
        hashMap.set(rightFruit, hashMap.get(rightFruit) + 1 || 0);
        while (hashMap.size > 2) {
            const leftFruit = fruits[left];
            if (hashMap.get(leftFruit) === 0) {
                hashMap.delete(leftFruit);
            } else {
                hashMap.set(leftFruit, hashMap.get(leftFruit) - 1);
            }
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
};
    
// time: O(n)
// space: O(1) as there is a maximum of three types of fruits stored
