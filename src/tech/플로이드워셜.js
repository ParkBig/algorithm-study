const 플로이드워셜 = () => {
  let graph = [
    [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
    [Infinity, 0, 1, 5, Infinity, Infinity],
    [Infinity, 7, 0, 2, 2, Infinity],
    [Infinity, 2, Infinity, 0, Infinity, 6],
    [Infinity, Infinity, 2, Infinity, 0, Infinity],
    [Infinity, Infinity, Infinity, 1, Infinity, 0],
  ];

  for (let k = 1; k <= n; k++) {
    for (let a = 1; a <= n; a++) {
      for (let b = 1; b <= n; b++) {
        let cost = graph[a][k] + graph[k][b];
        graph[a][b] = Math.min(graph[a][b], cost);
      }
    }
  }
};

// 모든 경로를 다구해버림
