function solution(maps) {
  let ans = [];
  const dx = [-1,1,0,0];
  const dy = [0,0,-1,1];
  let visited = Array.from({ length: maps.length }, () => Array.from({ length: maps[0].length }, () => false));
  
  const bfs = (target) => {
    let queue = [target];
    let sum = 0;

    while (queue.length) {
      let [x,y] = queue.shift();
      sum += maps[x][y]
      visited[x][y] = true;
      
      for (let i=0; i<4; i++) {
        if (x+dx[i]> -1 && x+dx[i]< maps.length && y+dy[i] > -1 && y+dy[i]< maps[0].length && maps[x+dx[i]][y+dy[i]] !== "X" && !visited[x+dx[i]][y+dy[i]]) {
          queue.push([x+dx[i], y+dy[i]]);
        }
      }
    }

    return sum ? sum : -1
  }
  
  for (let i=0; i<maps.length; i++) {
    for (let j=0; j<maps[0].length; j++) { 
      if (maps[i][j] !== "X") {
        ans.push(bfs([i,j]))
      }
    }
  }
}