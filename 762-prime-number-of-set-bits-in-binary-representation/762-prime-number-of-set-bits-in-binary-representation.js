/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

var countPrimeSetBits = function (left, right) {
    let a = 0;
    for (let i = left; i <= right; i++) {
        let t = checkPrime(i);
        
        if (t) a++;
    }
    return a;
};

var checkPrime = function (n) {
    let c = 0,
        t = 0;
    if (n == 1) return false;
    while (n) {
        t = n % 2;
        n = Math.floor(n / 2);
       
        if (t == 1) {
            c++;
        }
    }

   
    if (c == 1) return false;

    for (let i = 2; i <= c / 2; i++) {
        if (c % i == 0) return false;
    }

    return true;
};