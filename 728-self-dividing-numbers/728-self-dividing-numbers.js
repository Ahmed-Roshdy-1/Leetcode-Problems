/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let ans = [];
    for (let i = left; i <= right; i++) {
        let n = i,
            c = 0,
            count = 0;

        while (n > 0) {
            count++;
            let temp = n % 10;
            if (temp === 0) {
                break;
            } else {
                if (i % temp == 0) {
                    c++;
                }
            }
            console.log(n, c, count);
            n = parseInt(n / 10);
        }

        if (c === count) ans.push(i);
    }
    return ans;
};