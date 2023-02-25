// Task 502. IPO
// Suppose LeetCode will start its IPO soon. In order to sell a good price of its shares to Venture Capital, LeetCode would like to work on some projects to increase its capital before the IPO. Since it has limited resources, it can only finish at most k distinct projects before the IPO. Help LeetCode design the best way to maximize its total capital after finishing at most k distinct projects.
// You are given n projects where the ith project has a pure profit profits[i] and a minimum capital of capital[i] is needed to start it.
// Initially, you have w capital. When you finish a project, you will obtain its pure profit and the profit will be added to your total capital.
// Pick a list of at most k distinct projects from given projects to maximize your final capital, and return the final maximized capital.
// The answer is guaranteed to fit in a 32-bit signed integer.

// algo: max queue

function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
    let queue = new MaxPriorityQueue();
    
    let combinedData: number[][] = capital.map((item, idx) => [item, profits[idx]]);
    combinedData.sort((a,b) => a[0]-b[0]);

    let currentCapital: number = w;
    let currentIdx: number = 0;

    while(k > 0) {
    // consider capital at hand first at every iteration
    // get a list of projects you can do with that capital,

        while(currentIdx < combinedData.length && combinedData[currentIdx][0] <= currentCapital){
            const [capital, profit] = combinedData[currentIdx];
// pick most profitable project to do from that list.
// Note: profit is not (profit[i]-capital[i]), it is just (profit[i])
            queue.enqueue(profit);

            currentIdx += 1;
        }

        if(queue.size() === 0){
            return currentCapital;
        }

        const {element} = queue.dequeue();
        currentCapital += element;

        k-=1;
    }

    return currentCapital;
};
      
// Time complexity: O(nlogn)
// Space complexity: O(n)
