function solution(places) {
  let ans = [];
  const dx =[-1,1,0,0]
  const dy =[0,0,-1,1]
  
  const bfs = (target, place) => {
    let visited = Array.from({length: 5}, () => Array.from({length:5}, () => false));
    let queue = [target];
    
    while (queue.length) {
      let [[x,y], distance] = queue.shift();
      if (place[x][y] === "P" && distance <= 2 && distance > 0) return false
      
      visited[x][y] = true;

      for (let i=0; i<4; i++) {
        if (x+dx[i] > -1 && x+dx[i] <5 && y+dy[i] >-1 && y+dy[i]< 5 && place[x+dx[i]][y+dy[i]] !== "X" && !visited[x+dx[i]][y+dy[i]]) {
          queue.push([[x+dx[i], y+dy[i]], distance + 1])
        }
      }
    }

    return true
  }
  
  for (let place of places) {
    let isOk = true;
    
    for (let i=0; i<5; i++) {
      for (let j=0; j<5; j++) {
        if (place[i][j] !== "P") continue;
        if (!bfs([[i,j], 0], place)) isOk = false;
      }
    }
    
    isOk ? ans.push(1) : ans.push(0)
  }
  
  return ans
}