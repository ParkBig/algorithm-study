function 영어끝말잇기(n, words) {
  var answer = [0, 0];
  let sift = new Set();
  
  for (let i=0; i<words.length; i++) {
    if ((sift.has(words[i])) || (words[i-1] && words[i-1][words[i-1].length-1] !== words[i][0]))  {
      answer[0] = (i+1)%n === 0 ? n : (i+1)%n;
      answer[1] = Math.ceil((i+1)/n);
      break;
    }
    sift.add(words[i]);
  }

  return answer;
}