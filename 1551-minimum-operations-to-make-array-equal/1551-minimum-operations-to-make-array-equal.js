const minOperations = (n) => {
  let ans = 0;
  for (let i = 0; i < n / 2; i++) {
    let temp = i * 2 + 1;
    if (n - temp >= 0) {
      ans += n- temp;
    }
  }
  return ans
};