// Task 953. Verifying an Alien Dictionary
// In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.
// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

// Algo: make a map. Iterate over "words" in pairs. If word1[0] === word2[0], go on. If not: check the map for order.


function isAlienSorted(words: string[], order: string): boolean {
    let orderMap = {}
    for (let i = 0; i < order.length; i++){
        orderMap[order[i]] = i;
    }

    let isValidate = (c,p) =>{
        let len = c.length < p.length ? c.length : p.length;
        
        for(let i =0; i<len; i++){
            if(orderMap[c[i]] > orderMap[p[i]]) return true;
            if(orderMap[c[i]] < orderMap[p[i]]) return false;
        }
        return c.length >= p.length;
    }

    for (let i =1; i<words.length;i++){
        if (!isValidate(words[i],words[i-1])) return false;
    }
    
    return true; 
};


// Time complexity : O(M), where M is the total number of characters in "words". Could be M + N BUT N = 26 letters, so it's O(M)
// Space complexity : O(1)
