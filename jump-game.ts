// Task 1345. Jump Game IV
// Given an array of integers arr, you are initially positioned at the first index of the array.
// In one step you can jump from index i to index:
// i + 1 where: i + 1 < arr.length.
// i - 1 where: i - 1 >= 0.
// j where: arr[i] == arr[j] and i != j.
// Return the minimum number of steps to reach the last index of the array.
// Notice that you can not jump outside of the array at any time.

// Algo: BFS: use 2 queue to preform
// cur and next to keep track on the current node we are checking

type JumpNode = {
    val: number;
    used: boolean;
    minStep: number;
}

function minJumps(arr: number[]): number {
    const jompNode: Array<JumpNode> = [];
    
    // represents value: Array<idx of the value in the arr>
    const mp: Record<number, number[]> = {};
    const len = arr.length;

    // initialisation
    for (let i = 0; i < len; ++i) {
        jompNode.push({ val: arr[i], used: false, minStep: len - 1 });
        if (mp[arr[i]] === undefined) mp[arr[i]] = [];
        mp[arr[i]].push(i);
    }

    // cnt starts from -1 because the queue starts from index 0
    let cnt = -1;
    let cur: Array<number> = [0];
    let next: Set<number> = new Set<number>();

    // whenever cur is not empty, we continue processing
    while (cur.length > 0) {
        for (const i of cur) {
            if (jompNode[i].used) { continue; }
            jompNode[i].used = true;
            jompNode[i].minStep = Math.min(jompNode[i].minStep, cnt + 1);

            // if we find the last index, return directly
            if (i === len - 1) return jompNode[i].minStep;

            // add the next and the previous idx of JumpNode to queue next
            if (i < len - 1 && !jompNode[i + 1].used) next.add(i + 1);
            if (i > 0 && !jompNode[i - 1].used) next.add(i - 1);

            const curVal = jompNode[i].val;

            // add idx with the same value to queue next
            // remove the mp to identify whether the value is already been checked
            if (mp[curVal]) {
                mp[curVal].forEach(nextIdx => next.add(nextIdx));
                delete mp[curVal];
            }
        }
        
        // change cur to next, clear the next
        cur = Array.from(next);
        next = new Set<number>();
        ++cnt;
    }
    
    return jompNode[len - 1].minStep;
};
  
// Time complexity: O(n)
// Space complexity: O(n)

