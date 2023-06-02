const 투포인터 = (data, targetSum) => {
  let n = data.length;

  let count = 0;
  let intervalSum = 0;
  let end = 0;

  for (let start = 0; start < n; start++) {
    while (intervalSum < targetSum && end < n) {
      intervalSum += data[end];
      end++;
    }

    if (intervalSum == targetSum) count++;
    intervalSum -= data[start];
  }
};
