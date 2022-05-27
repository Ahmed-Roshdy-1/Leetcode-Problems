/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
    let ans = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            ans.push([i, j]);
        }
    }
    function distance(r, c) {
        return Math.abs(rCenter - r) + Math.abs(cCenter - c);
    }
    ans.sort(function (a, b) {
        return distance(a[0], a[1]) - distance(b[0],b[1]);
    });

    return ans;
};