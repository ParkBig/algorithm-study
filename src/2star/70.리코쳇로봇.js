//  bfs + dfs 임
function 리코쳇로봇(board) {
  let direction = {now: 0, prev: null};
  let nowLocation = [];
  let goalLocation = [];
  let dx = [null, -1, 1, 0, 0]
  let dy = [null, 0, 0, -1, 1]
  let count = 0;

  for (let i=0; i<board.length; i++) {
    for (let j=0; j<board[i].length; j++) {
      if (board[i][j] === "R") {
        nowLocation = [i,j]
      }
      if (board[i][j] === "G") {
        goalLocation = [i,j]
      }
    }
    if (nowLocation.length && goalLocation.length) break;
  }

  const findDirection = () => {
    for (let i=1; i<5; i++) {
      let findIndex = [nowLocation[0] + dx[i], nowLocation[1] + dy[i]]
      if (findIndex[0] > -1 && findIndex[0] <board.length && findIndex[1] > -1 && findIndex[1] < board[0].length && board[findIndex[0]][findIndex[1]] !== "D" && i !== direction.prev) {
        direction.now = i;
        break;
      } else {
        direction.now = 0;
      }
    }
  }

  findDirection()
  console.log(direction)
//   const dfs = (nowLocation) => {
//     let queue = [nowLocation];
//     findDirection();

//     while (queue.length) {
//       let [x,y] = queue.shift();
//       if (board[x + dx[direction.now]][y + dy[direction.now]] === "G") {
//         return count;
//       }

//       if (x + dx[direction.now] >-1 && x + dx[direction.now] < board.length && y + dy[direction.now] >-1 && y + dy[direction.now] < board[0].length) {
//         if (board[x + dx[direction.now]][y + dy[direction.now]] === "D") {
//           count++;
//           direction.prev = direction.now
//           findDirection();
//           if (direction.now === 0) {
//             return -1
//           }
//           queue.push([x + dx[direction.now],y + dy[direction.now]])
//         } else {
//           queue.push([x + dx[direction.now],y + dy[direction.now]])
//         }
//       }

//     }
//   }

//   dfs(nowLocation)
  console.log("hi")
}

solution(["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."])