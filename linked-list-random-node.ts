// Task 382. Linked List Random Node
// Given a singly linked list, return a random node's value from the linked list. Each node must have the same probability of being chosen.
// Implement the Solution class:
// Solution(ListNode head) Initializes the object with the head of the singly-linked list head.
// int getRandom() Chooses a node randomly from the list and returns its value. All the nodes of the list should be equally likely to be chosen.

// algo: init by creating array of nodes - O(n), space & time
// get random index from this array

class Solution {
    protected nodes: number[];
    constructor(head: ListNode | null) {
        let temp_node: ListNode | null = head;
        this.nodes = [];
        while (temp_node){
            this.nodes.push(temp_node.val)
            temp_node = temp_node.next;
        }
    }

    // O(1) - time
    getRandom(): number {
        const size = this.nodes.length;
        const rand_idx = Math.floor(Math.random() * size);
        return this.nodes[rand_idx];
    }
}
