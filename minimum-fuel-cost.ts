// Task 2477. Minimum Fuel Cost to Report to the Capital
// There is a tree (i.e., a connected, undirected graph with no cycles) structure country 
// network consisting of n cities numbered from 0 to n - 1 and exactly n - 1 roads. 
// The capital city is city 0. You are given a 2D integer array roads where roads[i] = [ai, bi] 
// denotes that there exists a bidirectional road connecting cities ai and bi.
// There is a meeting for the representatives of each city. The meeting is in the capital city.
// There is a car in each city. You are given an integer seats that indicates the number of seats in each car.
// A representative can use the car in their city to travel or 
// change the car and ride with another representative. The cost of traveling between two cities is one liter of fuel.
// Return the minimum number of liters of fuel to reach the capital city.

// Algo: 

function minimumFuelCost(roads: number[][], seats: number): number {
    let n = roads.length + 1
    if (roads.length == 0) return 0

    let adj = new Array(n).fill(0).map(() => [])

    for (let road of roads) {
        adj[road[0]].push(road[1])
        adj[road[1]].push(road[0])
    }

    let res = 0
    let dfs = function (node, parent) {
        let representatives = 0
        for (let neighbor of adj[node]) {
            if (parent == neighbor) continue
            representatives += dfs(neighbor, node)
        }
        if (node == 0) return 0
        representatives++
        res += Math.ceil(representatives/seats)
        return representatives
    }

    dfs(0, -1)
    return res
};

// Time complexity: O(n)
// Space complexity: O(n)
