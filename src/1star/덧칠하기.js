function solution(n, m, section) {
  let answer = 0;
  let done = -1;
  
  for (let i of section) {
      if (i > done) {
          done = i + m - 1;
          answer++;
      }
  }
  
  return answer;
}