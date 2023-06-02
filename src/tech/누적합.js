const 누적합 = (arr) => {
  // p = [0] 배열과 합을 기억할 변수를 정하고 미리 합을 구해 배열에 저장해 놓는다.
  // 그리고 꺼내쓴다 ㅋ n 부터 x 까지의 구간 합은
  // p[x] - p[n-1] 이고
  // p[x] - p[x-1] = arr[x]

  // 2차원 배열일때'
  // sumArr[x][y] = arr[x][y] + sumArr[x-1][y] + sumArr[x][y-1] - sumArr[x-1][y-1] 로 누적합 배열 만들고
  // i,j 부터 x,y까지 합은
  // sumArr[x][y] - sumArr[i-1][y] - sumArr[x][j-1] + sumArr[i-1][j-1]
  // n = 행, m = 열
  // 누적합 계산
  let sum = [];
  for (let i = 0; i <= n; i++) sum.push(new Array(m + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      sum[i][j] = arr[i][j] + sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1];
    }
  }

  // i,j 부터 n,m의 구간 합
  // sumArr[x][y] - sumArr[i-1][y] - sumArr[x][j-1] + sumArr[i-1][j-1]
};
