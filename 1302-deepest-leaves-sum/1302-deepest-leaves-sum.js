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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
     let sum = 0, depth = 0;
    function helper(node, level) {
        if (!node.left && !node.right){
            if (level > depth){
                depth = level;
                sum = node.val;
            } else if (level == depth) {
                sum += node.val;
            }
            return;
        }
        if(node.left)  helper(node.left , level + 1);
        if(node.right)  helper(node.right , level + 1);
    }
    helper(root, depth);
    return sum;
};