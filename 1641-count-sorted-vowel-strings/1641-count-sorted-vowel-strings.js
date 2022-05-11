/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  const dp = new Array(5).fill(1);
  n++;

  while (n > 1) {
    for (let i = 0; i < dp.length; i++) {
      dp[i] = dp[i] + (dp[i - 1] || 0);
    }
    //console.log(dp);
    n--;
  }

  return dp[4];
};