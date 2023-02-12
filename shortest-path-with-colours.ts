// Task 1129. Shortest Path with Alternating Colors
// You are given an integer n, 
// the number of nodes in a directed graph where the nodes are labeled from 0 to n - 1. 
// Each edge is red or blue in this graph, and there could be self-edges and parallel edges.
// You are given two arrays redEdges and blueEdges where:
// redEdges[i] = [ai, bi] indicates that there is a directed red edge from node ai to node bi in the graph, and
// blueEdges[j] = [uj, vj] indicates that there is a directed blue edge from node uj to node vj in the graph.
// Return an array answer of length n, where each answer[x] is 
// the length of the shortest path from node 0 to node x such that the edge colors alternate along the path, or -1 if such a path does not exist.

// Algo: a directed graph, unweighted = BFS
// Create a list (graph) of n-length
// Fill out so that contains a list of pairs such that graph[node] has the neighbors with colors specified
// Create a answer array with the value -1 where answer[i] is the answer for the i-th node
// Create a "visited" Object
// Create a queue 
// While queue has items: loop on. Fill out result array, get nextVal from graph, change colors


type Color = 'r' | 'b';
type Graph = {
  [key: string]: {
    [key in Color]: number[];
  };
};
type Visited = {
  [key in Color]: Set<number>;
};

function shortestAlternatingPaths(
  n: number,
  red_edges: number[][],
  blue_edges: number[][]
): number[] {
  const graph: Graph = {};
  // all nodes neighbors in the graph
  for (let i = 0; i < n; i++) graph[i] = { r: [], b: [] };
  red_edges.forEach(([i, j]) => graph[i].r.push(j));
  blue_edges.forEach(([i, j]) => graph[i].b.push(j));

  const res: number[] = Array(n).fill(-1);
  const visited: Visited = {
    r: new Set<number>(),
    b: new Set<number>(),
  };

  const queue: [number, Color][] = [
    [0, 'r'],
    [0, 'b'],
  ];

  let len = 0;

  while (queue.length) {
    const j = queue.length;

    for (let i = 0; i < j; i++) {
      const [currValue, currColor] = queue.shift()!;

      if (res[currValue] === -1) {
        res[currValue] = len;
      }

      const nextValues = graph[currValue][currColor];
      const nextColor = currColor === 'b' ? 'r' : 'b';

      nextValues.forEach((nextValue) => {
        if (!visited[nextColor].has(nextValue)) {
          visited[nextColor].add(nextValue);
          queue.push([nextValue, nextColor]);
        }
      });
    }
    len++;
  }

  return res;
}

// Time complexity: O(n+e) - where n is the number of nodes and e is the total number of blue and red edges
// One queue operation is O(1), one can be pushed twice, so O(n). an edge can be operated on twice so O(e)
// Space: O(n+e)
