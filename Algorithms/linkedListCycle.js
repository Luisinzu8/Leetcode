// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

head = [3, 2, 0, -4];
//pos = 1

var hasCycle = function (head) {
  //two pointer method( 1 fast pointer, 1 slow pointer) assigned both to head
  let pointer1 = head;
  let pointer2 = head;
  //while pointer1 is not null and pointer.next is not null we move pointer1 2 spots and move pointer2 one spot
  while (pointer1 !== null && pointer1.next !== null) {
    pointer1 = pointer1.next.next;
    pointer2 = pointer2.next;
    //if the pointers meet that means there is a cycle in the linked list, return true
    if (pointer1 === pointer2) {
      return true;
    }
  }
  //if the pointer never meet and pointer1 === null, return false
  return false;
};
