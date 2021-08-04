// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Example 1:

// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  //if Linked List is empty(null) return empty list
  if (head === null) return head;
  //create a new node so we can use it to point to the head of our linked list
  let current = new ListNode(-1);
  //set our new node(current) at the beginning and point it at our head node
  current.next = head;
  head = current;
  //while .next is not null(basically while there is at least one node in our original list)
  while (current.next !== null) {
    //check to see if node is equal to val
    if (current.next.val === val) {
      //if it is equal to val point it at the node after using .next.next
      current.next = current.next.next;
    } else {
      //if it is not equal to val set current to current.next
      current = current.next;
    }
  }
  //once current.next equals null, return head.next(we dont return head because that will include our dummy node)
  return head.next;
};
