/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let min=a>b? a-b:b-a;
    if(min==0) min=a;
    let c=0
    for(let i=1;i<=min;i++){
        if(a%i==0&&b%i==0){
            c++;
        }
    }
    return c;
};