// 최장 증가 부분 수열
const lis = (arr) => {
  // 배열을 작은것부터 시작해서 비교하기위해 순서를 바꿔준다.
  arr1 = arr.reverse();

  let d = [0]; // lis 배열
  for (x of arr1) {
    if (d[d.length - 1] < x) {
      d.push(x);
    } else {
      let index = 하한선(d, x, 0, d.length);
      d[index] = x;
    }
  }

  return arr - (arr1.length - 1);
};
