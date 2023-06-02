function 신규아이디추천(new_id) {
  
  let answer = ""
  
  new_id = new_id.toLowerCase();
  
  for (let i=0; i<new_id.length; i++) {
    if (/[a-z0-9_.-]/.test(new_id[i])) {
      if ((answer[answer.length-1] === ".") && (new_id[i] === ".")) {
        continue;
      }
      answer += new_id[i];
    }
  }
  
  if (answer[0] === ".") {
    answer = answer.slice(1)
  }
  answer.replace(" ", "a");
  if (answer.length > 15) {
    answer = answer.slice(0,15);
  }
  if (answer[answer.length-1] === ".") {
    answer = answer.slice(0,answer.length-1)
  }
  
  if (answer.length <=2) {
    while (answer.length <3) {
      if (answer === "") {
        answer += "a"
      } else {
        answer += answer[answer.length-1];
      }
    }
  }
  
  return answer
}

function 신규아이디추천(new_id) {
  const answer = new_id
      .toLowerCase() // 1
      .replace(/[^\w-_.]/g, '') // 2
      .replace(/\.+/g, '.') // 3
      .replace(/^\.|\.$/g, '') // 4
      .replace(/^$/, 'a') // 5
      .slice(0, 15).replace(/\.$/, ''); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
