// Task 23. Merge k Sorted Lists
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.

// Algo: priority queue (min heap)
// Compare every k nodes (head of every linked list)
// and get the node with the smallest value.
// so if head1 > head2, we add head1 to list,
// then move head1.next, then compare it to head2 again
// but optimize the comparison process by priority queue. 


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists_priority_queue = function(lists) {
    let queue = new PriorityQueue();
    lists.forEach(list => {
        if(list) queue.enqueue(list, list.val)
    });

    let res = new ListNode(-1);
    let cur = res;
    while(!queue.isEmpty()) {
        cur.next = queue.dequeue();
        cur = cur.next;
        if(cur.next) queue.enqueue(cur.next, cur.next.val);
    }
    return res.next;
}

class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.values = [];
	}

	enqueue(val, priority) {
		let node = new Node(val, priority);
		this.values.push(node);
		this.bubbleUp();
	}

	dequeue() {
		let max = this.values[0];
		let end = this.values.pop();
		if(this.values.length) {
			this.values[0] = end;
			this.bubbleDown();
		}
		return max.val;
	}
    
    isEmpty() {
        return !this.values.length;
    }
    
    bubbleUp(index = this.values.length - 1) {
		if(index <= 0) return;
		let parentIndex = Math.floor((index - 1) / 2);
		if(this.values[index].priority <= this.values[parentIndex].priority) {
			[this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
			this.bubbleUp(parentIndex);
		}
	}
	
	bubbleDown(index = 0, swapIndex = null) {
		let leftIndex = index * 2 + 1,
			rightIndex = index * 2 + 2,
			length = this.values.length;

		if(leftIndex < length) {
			if(this.values[leftIndex].priority <= this.values[index].priority) {
				swapIndex = leftIndex;
			}
		}

		if(rightIndex < length) {
			if((swapIndex === null 
            && this.values[rightIndex].priority <= this.values[index].priority) 
|| (swapIndex !== null 
&& this.values[rightIndex].priority <= this.values[leftIndex].priority)) {
				swapIndex = rightIndex;
			}
		}

		if(swapIndex !== null) {
			[this.values[index], this.values[swapIndex]] = [this.values[swapIndex], this.values[index]];
			this.bubbleDown(swapIndex, null);
		}
	}
}

// Time complexity : O(Nlog⁡k) where k\ is the number of linked lists.
// The comparison cost is be reduced to O(log⁡k) for every pop/insertion to priority queue. 
// But finding the node with the smallest value just costs O(1) time.
// There are N Nnodes in the final linked list.
// Space complexity : O(n) - creating a new linked list 
// the priority queue (implemented with heaps) costs O(k)
