var totalMoney = function (n) {
    let ans = 0,
        base = 28,
        t = Math.floor(n / 7),
        t2 = n % 7,
        temp = t + 1;
    if (t) {
        ans = base;
        base += 7;
        t--;
    }
    while (t--) {
        ans += base;
        base += 7;
    }
    console.log(ans);

    for (let i = 0; i < t2; i++) {
        ans += temp++;
    }
    return ans;
};