// 첫풀이 틀림
function solution(n, wires) {
  let graph = {};
  let hasMany = [];
  let ans = [];

  for (let i of wires) {
    graph[i[0]] = graph[i[0]] ? [...graph[i[0]], i[1]] : [i[1]];
    graph[i[1]] = graph[i[1]] ? [...graph[i[1]], i[0]] : [i[0]];
  }

  const bfs = (tower, del) => {
    let visited = Array.from({ length: n + 1 }, () => false);
    let queue = [tower];
    let width = 1;

    visited[del] = true;

    while (true) {
      let node = queue.shift();

      visited[node] = true;

      for (let i of graph[node]) {
        if (!visited[i]) {
          width++;
          queue.push(i);
        }
      }

      if (queue.length === 0) {
        return width;
      }
    }
  };

  for (let i in graph) {
    if (!hasMany[1]) {
      hasMany[0] = i;
      hasMany[1] = [...graph[i]];
    } else {
      if (hasMany[1].length < graph[i].length) {
        hasMany[0] = i;
        hasMany[1] = [...graph[i]];
      }
    }
  }

  for (let i of hasMany[1]) {
    ans.push(bfs(+hasMany[0], i) - bfs(i, +hasMany[0]));
  }

  return Math.min(...ans);
}

// 둘째 풀이
function solution(n, wires) {
  let graph = {};
  let ans = [];

  for (let i of wires) {
    graph[i[0]] = graph[i[0]] ? [...graph[i[0]], i[1]] : [i[1]];
    graph[i[1]] = graph[i[1]] ? [...graph[i[1]], i[0]] : [i[0]];
  }

  const bfs = (tower, del) => {
    let visited = Array.from({ length: n + 1 }, () => false);
    let queue = [tower];
    let width = 1;

    visited[del] = true;

    while (true) {
      let node = queue.shift();
      visited[node] = true;

      for (let i of graph[node]) {
        if (!visited[i]) {
          width++;
          queue.push(i);
        }
      }

      if (queue.length === 0) {
        return width;
      }
    }
  };

  for (let i of wires) {
    ans.push(Math.abs(bfs(i[0], i[1]) - bfs(i[1], i[0])));
  }

  return Math.min(...ans);
}

solution(9, [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
]);
