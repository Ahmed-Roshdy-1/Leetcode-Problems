/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let M = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= M) {
      candies[i] = true;
    } else {
      candies[i] = false;
    }
  }
  return candies;
};