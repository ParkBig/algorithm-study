function 과일장수(k, m, score) {
  var answer = 0;
  let stack = []

  score = score.sort((a,b) => b-a);

  for (let i of score) {
    stack.push(i);
    if (stack.length === m) {
      let lower = Math.min(...stack);
      answer += lower * m;
      stack = [];
    }
  }

  return answer;
}