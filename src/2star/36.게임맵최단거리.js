function 게임최단거리(maps) {
  const row = maps.length;
  const col = maps[0].length;

  let ans = 0;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  
  const bfs = (node) => {
    let queue = [];
    queue.push(node);
    
    while (queue.length) {
      const [[x,y], distance] = queue.shift();
      
      if (x === row-1 && y === col-1) {
        return ans = distance;
      }
      
      for (let i=0; i<4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        
        if (nx>-1 && nx<row && ny> -1 && ny <col && maps[nx][ny]) {
          maps[nx][ny] = 0;
          queue.push([[nx,ny], distance+1])
        }
      }
    }
    
    
  }
  
  maps[0][0] = 0
  bfs([[0,0], 1]);
  
  return ans ? ans : -1
}