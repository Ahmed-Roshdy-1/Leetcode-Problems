/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let a=[38]
    a[0]=0;
    a[1]=1
    a[2]=1
    for(let i=3;i<=n;i++){
        
        a[i]=a[i-3]+a[i-2]+a[i-1]
        
        
    }
    return a[n]
    
};