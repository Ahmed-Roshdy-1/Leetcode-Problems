
var addDigits = function (num) {
    let ans=0
    while (num >= 10) {
        while (num) {
            ans += num % 10;
            num= Math.floor(num/10);
            // console.log(ans+"//"+num)
        }

        num = ans;
        ans=0
    }
    return num;
};