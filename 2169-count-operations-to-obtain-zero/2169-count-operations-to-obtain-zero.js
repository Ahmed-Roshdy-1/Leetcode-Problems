/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {
    return !num1 || !num2 ? 0:1+countOperations(Math.max(num1,num2) - Math.min(num1,num2), Math.min(num1,num2))
    
};