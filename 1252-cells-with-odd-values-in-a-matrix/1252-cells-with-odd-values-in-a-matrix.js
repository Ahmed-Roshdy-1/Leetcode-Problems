var oddCells = function (m, n, indices) {
    let matrix = [],
        ans = 0;
    for (let i = 0; i < m; i++) {
        matrix.push(Array(n).fill(0));
    }

    for (let [x, y] of indices) {
        for (let i = 0; i < n; i++) {
            matrix[x][i]++;
        }

        for (let i = 0; i < m; i++) {
            matrix[i][y]++;
        }
    }

    for (let i = 0; i < m; i++) {
        matrix[i].forEach((num) => {
            if (num % 2 != 0) {
                ans++;
            }
        });
    }

    return ans;
};