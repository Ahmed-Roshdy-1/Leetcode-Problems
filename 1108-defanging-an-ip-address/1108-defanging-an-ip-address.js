/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
    let ans = "";

    [...address].forEach((element) => {
        if (element === ".") {
            ans += "[.]";
        } else {
            ans += element;
        }
    });

    return ans;
};