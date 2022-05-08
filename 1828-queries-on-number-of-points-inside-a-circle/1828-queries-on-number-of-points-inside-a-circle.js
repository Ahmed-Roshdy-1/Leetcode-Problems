var countPoints = function (points, queries) {
  let ans = [],
    c = 0;
  for (let i = 0; i < queries.length; i++) {
    c = 0;
    for (let j = 0; j < points.length; j++) {
      if (
        Math.abs(queries[i][0] - points[j][0]) ** 2 + Math.abs(queries[i][1] - points[j][1]) ** 2 <=
        queries[i][2] ** 2
      ) {
        c++;
      }
    }
    ans.push(c);
  }
  return ans;
};