// m sol
function solution(board, moves) {
    let pop = [];
    let removeCount = 0;
    for (let i in moves) {
        for (let j in board) {
            if (board[j][moves[i]-1] !== 0) {
                pop.push(board[j][moves[i]-1]);
                board[j][moves[i]-1] = 0
                break;
            }
        }
        for (let j=0; j<pop.length; j++) {
            if (pop[j]===pop[j+1]) {
                pop.splice(j,2);
                removeCount+=2;
                j-=2
                break;
            }
        }
    }
    return removeCount
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],	[1,5,3,5,1,2,1,4]))

// 처음 작성한 코드 , test 2 에서 시간초과떠서 위의 식으로 다시짬
// function solution(board, moves) {
//     let pop = [];
//     let removeCount = 0;
//     for (let i of moves) {
//         for (let j in board) { 
//             if (board[j][i-1] !== 0) {
//                 pop.push(board[j][i-1]);
//                 board[j][i-1] = 0
//                 break;
//             }
//         }
//     }
//     for (let i=0; i<pop.length; i++) {
//         if (pop[i]===pop[i+1]) {
//             pop.splice(i,2);
//             removeCount+=2;
//             i-=2
//         }
//     }
//     return removeCount
// }