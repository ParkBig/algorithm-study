const isWin = (board, type) => {
  let winLine = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  for (let [a,b,c] of winLine) {
    if (board[a] === type && board[b] === type && board[c] === type) {
      return true
    }
  }
  return false;
}

function solution(board) {
  let flatBoard = board.map(prop => prop.split("")).flat()
  let [o, x] = [0,0];
  let isTicTacToO = isWin(flatBoard, "O");
  let isTicTacToX = isWin(flatBoard, "X");
  
  for (let i of board) {
    for (let j of i) {
      if (j === "O") {
        o++
      }
      if (j === "X") {
        x++
      }
    }
  }
  
  if (x>o || x-o>1 || o-x>1) return 0
  if (isTicTacToO && isTicTacToX) return 0
  if (isTicTacToO && o-x !==  1) return 0
  if (isTicTacToX && o!==x) return 0
  
  return 1
}