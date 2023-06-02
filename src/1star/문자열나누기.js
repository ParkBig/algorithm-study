function 문자열나누기(s) {
  var answer = 0;

  let target = {
    1: 0,
    2: 0,
    nowTarget: null
  }

  for (let i of s) {
    if (!target["nowTarget"]) {
      target["nowTarget"] = i
    }
    if (target["nowTarget"] === i) {
      target[1]++
    }
    if (target["nowTarget"] !== i) {
      target[2]++
    }
    if (target[1] === target[2]) {
      answer++;
      target = {
        1: 0,
        2: 0,
        nowTarget: null
      }
    }
  }
  
  if (target["nowTarget"]) {
    answer++
  }

  return answer;
}
