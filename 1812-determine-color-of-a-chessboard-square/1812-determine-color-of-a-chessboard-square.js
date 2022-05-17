/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
    let c = coordinates[0];
    let n = parseInt(coordinates[1]);
    let obj = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
    };
    if (n % 2 != 0 && obj[c] % 2 != 0) return false;
    if (n % 2 == 0 && obj[c] % 2 == 0) return false;

    return true;
};