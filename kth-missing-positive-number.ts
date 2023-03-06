// 1539. Kth Missing Positive Number
// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
// Return the kth positive integer that is missing from this array.

// Algo: binary search
// to find the index i of the kth missing positive integer.

function findKthPositive(arr: number[], k: number): number {
    let l=0, r=arr.length;
    while(l<r){
        let mid=l+Math.floor((r-l)/2);
        if(arr[mid]-mid-1<k){l=mid+1}
		else{r=mid};
    }
    return k+l;  // arr[l-1]+k-(arr[l-1]-(l-1)-1)
};

// Time: O(logn)
// Space: O(1)
