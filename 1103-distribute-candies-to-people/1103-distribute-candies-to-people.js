var distributeCandies = function (candies, num_people) {
    let ans = new Array(num_people).fill(0);
    ans.fill(0);
    let temp = 0;

    while (candies) {
        for (let i = 0; candies; i++) {
            temp++;
            if (temp < candies) {
                ans[i] += temp;
                candies -= temp;
            } else {
                ans[i] += candies;
                candies = 0;
            }
            if (i +1 === num_people) i = -1;
        }
    }
    return ans;
};