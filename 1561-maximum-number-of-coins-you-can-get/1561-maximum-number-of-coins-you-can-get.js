var maxCoins = function (piles) {
    let ans=0;
    piles.sort(function (a, b) {
        return a - b;
    });
    while (piles.length >= 3) {
        a=piles.pop();
        b=piles.pop();
        c=piles.shift()
        ans+=b;
    }

    return ans;
};