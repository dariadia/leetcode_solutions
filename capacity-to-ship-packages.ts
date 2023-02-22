// Task 1011. Capacity To Ship Packages Within D Days
// A conveyor belt has packages that must be shipped from one port to another within days days.
// The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.
// Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.

// Algo: binary Search
// perform it on every weight given to check if passes

const daysNeeded = (weights, capacity): number => {
    // start with 0 bc we have not loaded anything on our ship yet
    let currentShipWeight = 0
    
    // we know we need at least one day
    let numberOfDays = 1
    
    for (let weight of weights) {
        // we load the current package onto the ship
        currentShipWeight += weight
        
        // if our weight exceeds our capacity we need
        // to come back another day. So, add a day &
        // reset our current ship weight to the current weight
        // so it is included in the next day's shipment
        if (currentShipWeight > capacity) {
            currentShipWeight = weight
            numberOfDays += 1    
        }
        
    }
    
    return numberOfDays
}

function shipWithinDays(weights: number[], days: number): number {
    let maxValue = -Infinity
    let sumOfWeights = 0
    
    // find the max in weights and total weights
    for (let weight of weights) {
        maxValue = Math.max(maxValue, weight)
        sumOfWeights += weight
    }
    
    // the maxValue should fit onto the ship
    // hence, no ship smaller than maxValue is the answer
    let minAnswer = maxValue
    
    // we can load everything into one big ship
    let maxAnswer = sumOfWeights
    
	// think of it this way [minAnswer, minAnswer + 1, ..., maxAnswer - 1, maxAnswer]
	// this array represents all possible capacities that could result in a valid answer
    while(minAnswer < maxAnswer) {
		// we take the middle value of the array
        const candidateCapacity = Math.floor((minAnswer + maxAnswer) / 2)
        
        // we can ship within the number of days with the current candidate capacity. 
        // Now we just need to make sure this is the lowest possible capacity 
        if (daysNeeded(weights, candidateCapacity) <= days) {
            maxAnswer = candidateCapacity
        }
        
        // if we need more days than we are allowed this can't possibly be our answer
        // so we will have to increase our minimum answer 
        if (daysNeeded(weights, candidateCapacity) > days) {
            minAnswer = candidateCapacity + 1
        }
    }
    
    // our minAnswer is our minimum possible answer so we return it
    return minAnswer
};


// Time complexity: O(n⋅log(n))
// Space complexity: O(1)
