/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let c=0
    
    while(num){
        if(num%2==0){
            num/=2;
        }else{
            num--;
        }
        c++;
    }
    return c
    
};