// Task 2306. Naming a Company
// You are given an array of strings ideas that represents a list of names to be used in the process of naming a company. 
// The process of naming a company is as follows:
// Choose 2 distinct names from ideas, call them ideaA and ideaB.
// Swap the first letters of ideaA and ideaB with each other.
// If both of the new names are not found in the original ideas, 
// then the name ideaA ideaB (the concatenation of ideaA and ideaB, separated by a space) is a valid company name.
// Otherwise, it is not a valid name.
// Return the number of distinct valid names for the company.

// Algo: 
// Create an object map that maps each letter to a set of all suffixes of words in idea that start with it, 
// and initialize a variable count (result) to 0.
// Compare each letter's set to all following sets in map. For sets A and B:
// Store the number of mutual suffixes from both sets in a variable sameCount.
// Add 2 * ( dict[A].size - sameCount ) * ( dict[B].size - sameCount ) to res.
// Return result.


function distinctNames(ideas: string[]): number {
    let map = {}
    for (let idea of ideas) {
        let firstC = idea.slice(0,1)
        let others = idea.slice(1)
        if(!map[firstC]) map[firstC] = new Set()
        map[firstC].add(others)
    }
    
    let keys = Object.keys(map);
    let count = 0;

    for (let i = 0; i < keys.length; i++) {
        let firstSet = map[keys[i]]
        for (let j =i+1; j<keys.length; j++) {
            let secondSet = map[keys[j]]
            let sameCount = 0;
            for(let c of firstSet){
                if(secondSet.has(c)) sameCount++ 
            }

            count += 2 * (firstSet.size - sameCount) * (secondSet.size - sameCount)
        }
    }

    return count;
};

// Time complexity: O(n)
// Space complexity: O(n)
