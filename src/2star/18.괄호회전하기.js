// 풀긴했는데 만족스럽지 못함. 나중에 다시풀어보자.

function 괄호회전하기(s) {
  if (s.length%2 !== 0) {
    return 0;
  }

  let answer = 0;

  s = s.repeat(2)
  let index = 0;

  while (index<s.length/2) {
    let newS = "";
    for (let i=index; i<s.length/2+index; i++) {
      newS += s[i];
    }

    let times = s.length/4;
    while (times>0) {
      newS = newS.replace(/(\(\)|\{\}|\[\])/g, "");
      times--;
    }

    if (!newS) {
      answer++;
    }
    
    index++;
  }

  return answer
}