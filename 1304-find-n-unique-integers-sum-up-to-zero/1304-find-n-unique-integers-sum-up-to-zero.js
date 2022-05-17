/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
    if (n === 1) return [0];
    let ans = [];

    let num = n;
    for (i = 0; i < n; i++) {
        if (i === Math.round(num / 2)-1 && num % 2 != 0) {
            ans[i] = 0;
        } else {
            ans[i] = n;
            ans[n - 1] = n * -1;
            
        }
        n--;
    }
    
    return ans;
};