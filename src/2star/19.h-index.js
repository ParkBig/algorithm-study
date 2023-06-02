function hIndex(citations) {
  citations = citations.sort((a, b) => a - b)

  let max = citations[citations.length - 1];
  let citationsLength = citations.length;
  let answer = max;

  while (true) {
    let base = citations.findIndex(p => p >= answer);
    if (citationsLength - base < answer || base > answer) {
      answer--
    } else {
      break
    }
  }

  return answer
}

// 다른사람 풀이
function solution(citations) {
  citations = citations.sort((a, b) => b - a);
  let i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }
  return i;
}