var countTriples = function (n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            let temp = Math.max(j, i);
            for (let c = temp; c <= n; c++) {
                if (i * i + j * j === c * c) {
                    ans++;
                }
            }
        }
    }

    return ans;
};