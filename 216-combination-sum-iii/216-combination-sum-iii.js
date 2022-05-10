/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    
    const output = [];
    const comb = [];
    
    for(let i=1;i<=9;i++) {
        comb.push(i);
    }
    
    function combinationSum(total, start, data) {
        if(total === n && data.length === k) {
            output.push([...data]);
            return;
        }
        
        for(let i=start;i<comb.length;i++) {
            if(data.length < k) {
                combinationSum(comb[i]+total, i+1, [...data, comb[i]])
            }
        }
    }
    
    combinationSum(0, 0, []);
    
    return output;
    
};