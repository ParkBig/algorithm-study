function createGraph(matrix) {
  const graph = {}; // 그래프를 표현할 객체 생성

  // 주어진 2차원 배열을 순회하면서 각 노드와 인접한 노드들을 그래프에 추가
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        const node = `${i},${j}`; // 노드 이름을 행과 열의 인덱스로 생성

        const neighbors = []; // 현재 노드와 인접한 노드들의 배열
        if (i > 0 && matrix[i - 1][j] === 1) {
          neighbors.push(`${i - 1},${j}`); // 상
        }
        if (i < matrix.length - 1 && matrix[i + 1][j] === 1) {
          neighbors.push(`${i + 1},${j}`); // 하
        }
        if (j > 0 && matrix[i][j - 1] === 1) {
          neighbors.push(`${i},${j - 1}`); // 좌
        }
        if (j < matrix[i].length - 1 && matrix[i][j + 1] === 1) {
          neighbors.push(`${i},${j + 1}`); // 우
        }

        graph[node] = neighbors; // 그래프에 노드와 인접한 노드들을 추가
      }
    }
  }

  return graph;
}

// Map버전
function createGraph(matrix) {
  const graph = new Map(); // 그래프를 표현할 Map 객체 생성

  // 주어진 2차원 배열을 순회하면서 각 노드와 인접한 노드들을 그래프에 추가
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        const node = `${i},${j}`; // 노드 이름을 행과 열의 인덱스로 생성

        const neighbors = []; // 현재 노드와 인접한 노드들의 배열
        if (i > 0 && matrix[i - 1][j] === 1) {
          neighbors.push(`${i - 1},${j}`); // 상
        }
        if (i < matrix.length - 1 && matrix[i + 1][j] === 1) {
          neighbors.push(`${i + 1},${j}`); // 하
        }
        if (j > 0 && matrix[i][j - 1] === 1) {
          neighbors.push(`${i},${j - 1}`); // 좌
        }
        if (j < matrix[i].length - 1 && matrix[i][j + 1] === 1) {
          neighbors.push(`${i},${j + 1}`); // 우
        }

        graph.set(node, neighbors); // 그래프에 노드와 인접한 노드들을 추가
      }
    }
  }

  return graph;
}