function 최대값과최솟값(s) {
  var answer = '';

  s = s.split(" ").map(Number);
  answer += Math.min(...s) + " " + Math.max(...s)
  
  return answer;
}