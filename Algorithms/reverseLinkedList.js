// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

head = [1, 2, 3, 4, 5];

//iterative solution
var reverseList = function (head) {
  // create previous node to use to point towards head node
  let prevNode = null;
  // while head is not null
  while (head !== null) {
    //create a reference to head.next node
    let nextNode = head.next;
    //point head.next to prevNode(null)
    head.next = prevNode;
    //point prevNode to head node
    prevNode = head;
    //point head to nextNode
    head = nextNode;
  }
  //return prevNode(do NOT return head because it is null)
  return prevNode;
};

//Recursive Solution
var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  let reversedListHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return reversedListHead;
};
