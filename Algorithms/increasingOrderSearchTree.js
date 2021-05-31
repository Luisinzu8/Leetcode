// Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.

 

// Example 1:


// Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
// Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

//DFS

var increasingBST = function(root) {
    const result = new TreeNode(null)
    let ref = result
    const dfs = (node) => {
        if (node.left) dfs(node.left)
        if (ref && !ref.right) ref.right = new TreeNode(node.val)
        ref = ref.right
        if (node.right) dfs(node.right)
    }
    dfs(root)
    return result.right
};