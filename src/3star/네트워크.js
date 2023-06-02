function solution(n, computers) {
  let a = {}

  for (let i=0; i<computers.length; i++) {
    let b = [];
    for (let j=0; j<computers[i].length; j++) {
      if (computers[i][j] && i !== j) {
        b.push(j);
      }
    }
    a[i] = b
  }
  
  console.log(a)
}

solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]])