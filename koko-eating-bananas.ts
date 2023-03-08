// Task 875. Koko Eating Bananas
// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
// Return the minimum integer k such that she can eat all the bananas within h hours.

function minEatingSpeed(piles: number[], h: number): number {
    /*The range of bananas that Koko can eat is k = 1 to Max(piles)*/
    let startk = 1;
    let endk = Math.max(...piles);
    
    while (startk <= endk) {
        let midk = Math.floor(startk + (endk - startk)/2);
        /*midk are the count of bananas that koko decide to eat. 
        So how many hours she will take to finish the piles?*/
        let hrs = 0;
        for (let pile of piles){
            /*pile is the num of bananas in piles*/
            hrs += Math.ceil(pile/midk);
        }
        if (hrs > h){
            /*Now if hrs > h she will not be to finish the pile so we have 
            to increase the bananas by moving start.*/
            startk = midk + 1;
        } else{
            /*If hrs <= h she will be eating too fast so we can reduce the bananas 
            so she eats slowly. So decrement end.*/
            endk = midk - 1;
        }
    }
    return startk;
};
                        
Time: O(n x logn)
Space: O(1)
