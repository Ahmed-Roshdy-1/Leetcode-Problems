/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    nums = sortArr(nums);
    for (let i = 0; nums.length; i++) {
        if (i != nums[i]) return i;
    }
    return nums.length;
};
var sortArr = function (n) {
    for (let i = 0; i < n.length; i++) {
        for (let j = 0; j < n.length - i; j++) {
            if (n[j] > n[j + 1]) {
                let temp = n[j];
                n[j] = n[j + 1];
                n[j + 1] = temp;
            }
        }
    }
    return n;
};