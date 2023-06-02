function solution(n, k) {
  n = n.toString(k).split("0").map(Number);
  
  let answer = 0;
  
  for (let i of n) {
    let isOk = true;
    if (i <= 1) {
      continue;
    }
    for (let j=2; j<=Math.sqrt(i); j++) {
      if (i%j === 0) {
        isOk = false;
        break;
      }
    }
    if (isOk) {
      answer++;
    }
  }
  
  return answer;
}