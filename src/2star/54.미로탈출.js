function solution(maps) {
  const [row, column] = [maps.length, maps[0].length];
  // 레버까지 이동하기 위한 배열
  const lArr = Array.from(Array(row), (e) => Array(column).fill(0));
  // 출구까지 이동하기 위한 배열
  const eArr = Array.from(Array(row), (e) => Array(column).fill(0));
  // 상 우 하 좌로 이동하기 위한 배열
  const position = [[1,0],[0,1],[-1,0],[0,-1]];
  let need = [];
  // 레버와 출구, 시작 위치
  let l = [];
  let e = [];
  let s = [];
  // 레버와 출구의 도착 유무
  let isL = false;
  let isE = false;
  
  // 시작 위치, 레버 위치, 출구 위치 저장
  maps.forEach((v,i) => {
      if(v.includes("S")) s.push(i,v.indexOf("S"));
      if(v.includes("L")) l.push(i,v.indexOf("L"));
      if(v.includes("E")) e.push(i,v.indexOf("E"));
  })
   
  // 시작 위치에 1을 저장
  lArr[s[0]][s[1]] = 1;
  need.push(s)
  
  while((!isL || !isE) && need.length){
      // [row, column] 현재 좌표
      const [r, c] = need.shift();
      // 레버를 당기기 위함
      if(!isL){
          for(let i = 0; i < 4; i++){
              const [newR, newC] = [r+position[i][0], c+position[i][1]];
              if(newR < 0 || newC < 0 || newR >= row || newC >= column) continue;
              if(!lArr[newR][newC] && maps[newR][newC] !== "X"){
                  // 이전 위치 값에서 1을 더해줌으로써 해당 위치까지의 거리를 알 수 있음
                  lArr[newR][newC] = lArr[r][c] + 1;
                  need.push([newR, newC]);
              }
              // 레버를 당겼으면 레버 위치를 need에 넣어주고 이제 출구를 찾음
              if(lArr[l[0]][l[1]]) {
                  isL = true;
                  need = [l];
                  eArr[l[0]][l[1]] = 1;
              }
          }
      }else{
          // 출구를 찾기 위함
          for(let i = 0; i < 4; i++){
              const [newR, newC] = [r+position[i][0], c+position[i][1]];
              if(newR < 0 || newC < 0 || newR >= row || newC >= column) continue;
              if(!eArr[newR][newC] && maps[newR][newC] !== "X"){
                  eArr[newR][newC] = eArr[r][c] + 1;
                  need.push([newR, newC]);
              }
              if(eArr[e[0]][e[1]]) {
                  isE = true;
                  need = [];
              }
          }
      }
  }
  // 각 시작 위치에 1을 넣고 시작했으므로 -2를 해줌
  return eArr[e[0]][e[1]] ? lArr[l[0]][l[1]] + eArr[e[0]][e[1]] - 2 : -1;
}

function solution(maps) {
    let start = [];  // 스타트 위치
    let lever = [];  // 레버 위치
    
    /*  1) start-lever, lever-end 두번을 나눠 최단 
        거리를 구하기 위해 두개의 map을 생성한다.  */
    const maps2 = maps.map(item => item.split(''));  
    const maps3 = maps.map(item => item.split('')); 
    
    // 2) 반복문을 통해 시작, 레버 위치를 찾는다.
    for(let i=0; i<maps.length; i++) {
        for(let j=0; j<maps[i].length; j++) {
            if(maps[i][j] === "S") start = [i,j];
            else if(maps[i][j] === "L") lever = [i,j]
        }
    }
    
    // 3)  start-lever 최단거리 시간
    const a = target(start, [...maps2], "L");
    // 4) lever-end 최단거리 시간
    const b = target(lever, [...maps3], "E");
    
    // 5) 둘중에 하나라도 거쳐가지 못한다면 -1를 반환한다.
    if(a === -1 || b === -1) return -1
    
    // 6) 거쳐간다면 최단거리 합을 반환한다.
    return a+b;
}

// 7) 최단거리 구하는 함수
function target(start, arr, target) {
    let time = 0;                 // 걸리는 시간
    const dx = [-1, 1, 0, 0];     // 상하좌우 행열 좌표
    const dy = [0, 0, -1, 1];
    const q = [start];         
    const n = arr.length;          // 좌표 값의 범위를 제한하는 n, m
    const m = arr[0].length;   
    arr[start[0]][start[1]] = 'X'; // 시작 위치를 막기
    
    // 8) 너비탐색(BFS) 
    while(q.length > 0) {
    
        // 9) q의 길이가 변하면 안되기 때문에 변수로 선언한다.
        let size = q.length;
        for(let i=0; i<size; i++) {
            const [x, y] = q.shift();
           
            // 10) 상하좌우 반복
            for(let j=0; j<4; j++) {
                let nx = x + dx[j];
                let ny = y + dy[j];
                
                // 11) 좌표 값 범위에 있으면서 벽(X)이 아니라면 
                if(nx >= 0 && nx < n && ny >= 0 && ny < m && arr[nx][ny] !== 'X') {
                    // 12) target이랑 만나게 되면 걸리는 시간을 반환한다.
                    if(arr[nx][ny] === target) {
                         return time+1;
                    } 
                    
                    // 13) 현재 좌표를 q에 넣고 다시 갈 수 없게 벽으로 막는다.
                    q.push([nx, ny]);
                    arr[nx][ny] = 'X';
                }
            }
        }
        // 14) 한 사이클이 끝나면 1초 증가
        time++;
    }
    // 15) target을 만나지 못한다면 -1 반환
    return -1;
}