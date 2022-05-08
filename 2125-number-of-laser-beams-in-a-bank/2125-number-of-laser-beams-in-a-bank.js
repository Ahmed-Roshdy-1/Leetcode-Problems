/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
  let ans = [];
  for (let i = 0; i < bank.length; i++) {
    ans.push(numOF1(bank[i]));
  }
  ans = ans.filter((num) => num != 0);
  let sum=0;
  for(let i=0;i<ans.length-1;i++){
    sum+=ans[i]*ans[i+1]
  }
  return sum;
};

var numOF1 = function (s) {
  let c = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      c++;
    }
  }
  return c;
};