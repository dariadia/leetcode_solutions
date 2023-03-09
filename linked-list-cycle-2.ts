// Task 142. Linked List Cycle II
// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.
// Do not modify the linked list.

// Algo: two pointer
// loop till they meet

function detectCycle(head: ListNode | null): ListNode | null {
    var p1 = head, p2 = head;
    // Run a loop until p2 and p2.next is equal to null...
    while (p2 != null && p2.next != null) {
        p1 = p1.next;       // moving p1 by 1
        p2 = p2.next.next;  // moving p2 by 2
        // found the cycle...
        if (p1 == p2)  break;
    }
    // In case there is no cycle or no meeting point...
    if (p2 == null || p2.next == null) return null;
    // run loop until again head & p1 don't meet...
    // p1 is X distance away
    // and it's X distance that takes head to get there
    while (head != p1) {
        head = head.next;   // moving head by 1...
        p1 = p1.next;   // moving p1 by 1 as well...
    }
    return head;       // Or return p1, they both will return the tail where cycle starts...
};

// Time Complexity : O(n)
// Space Complexity : O(1)
