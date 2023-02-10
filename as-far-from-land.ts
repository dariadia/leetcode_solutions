// Task 1162. As Far from Land as Possible
// Given an n x n grid containing only values 0 and 1, 
// where 0 represents water and 1 represents land, find a water cell such that its distance 
// to the nearest land cell is maximized, and return the distance. 
// If no land or water exists in the grid, return -1.
// The distance used in this problem is the Manhattan distance: 
// the distance between two cells (x0, y0) and (x1, y1) is |x0 - x1| + |y0 - y1|.

// Algo: 

function maxDistance(grid: number[][]): number {
	let q = []
    
    for (let i =0; i<grid.length;i++){
        for(let j =0; j<grid[0].length;j++){
            if(grid[i][j] == 1) q.push([i,j,0])
        }
    }
    let max = 0;
    let dir = [[-1,0],[1,0],[0,1],[0,-1]]

    while (q.length>0){
        let [r,c,count] = q.shift()

        max = Math.max(max,count)

        for(let d of dir){
            let [dx,dy] = d
            let x = r + dx;
            let y = c + dy;

            if (x<0 || x>=grid.length || y<0 || y>=grid[0].length) continue;
            if (grid[x][y] == 1) continue;

            q.push([x,y,count+1])
            grid[x][y] = 1;
        }
    }

    return max == 0 ? -1 : max;
}

