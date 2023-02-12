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

// Algo: DFS, a dictionary graph is used to store the neighbors of each node.
// Perform the DFS from the capital city: 
// The dfs function is called with the capital city as the starting node and its parent set as -1. 
// The DFS is performed to calculate the number of people present in each city.
// Calculate the number of cars required: 
// if the current node is not the capital city
// the number of cars required is calculated as the ceiling value of the number of people present in the city 
// divided by the number of seats in each car.

function minimumFuelCost(roads: number[][], seats: number): number {
    let graph = new Array(roads.length+1).fill(0).map(()=>[]);
    for (let road of roads) {
        graph[road[0]].push(road[1]);
        graph[road[1]].push(road[0]);
    }
    var cars = 0 ;
    function dfs(node , parent){
        let people = 1;
        for(let child of graph[node]){
            if (child === parent) continue;
            people += dfs(child , node);
        }
        if(node != 0)
            cars += Math.ceil(people/seats);
        return people;
    }
    dfs(0 , -1);
    return cars;
};

// Time complexity: O(n)
// Space complexity: O(n)
