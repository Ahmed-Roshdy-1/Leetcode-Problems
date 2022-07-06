var countEven = function (num) {
    ans = 0;
    while (num) {
        if(isEven(num)%2===0) ans++;
        num--;
    }
    return ans;
};

var isEven = function (n) {
    const str = n.toString();
    let sum = 0;

    for (const c of str) {
        sum += +c;
    }
    return sum;
};