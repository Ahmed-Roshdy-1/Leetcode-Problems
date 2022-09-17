/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let i=0,c=0;
    
    while(tickets[k]){
        
        
       
        
        
       for(let i=0;i<tickets.length;i++){
           if(tickets[i]){
               tickets[i]--;
               c++;
           }
           if(tickets[k]===0){
               break;
           }
       }
       
        // i++;
        
        
    }
    return c;
    
};