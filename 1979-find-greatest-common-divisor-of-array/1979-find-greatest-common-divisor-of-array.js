/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
   let a=Math.max(...nums);
    let b=Math.min(...nums);

    for(let i=b;i>1;i--){
        if(a%i==0 && b%i==0){
            return i;
        }
    }
    return 1;
    
};