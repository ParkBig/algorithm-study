function 명예의전당(k, score) {
  var answer = [];
  
  let test = [];
  for (let i of score) {
    test.push(i);
    test.sort((a,b) => b-a);
    if (test.length >= k) {
      answer.push(test[k-1])
    } else {
      answer.push(test[test.length -1]);
    }
  }
  
  return answer;
}
