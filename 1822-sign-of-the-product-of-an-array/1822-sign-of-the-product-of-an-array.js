/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]<0) ans++
        if(nums[i]==0) return 0
    }

    if (ans == 0) return 1;
    else if (ans %2 == 0) return 1;
    else return -1;
};