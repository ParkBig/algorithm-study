// 이건 안되는게 있음. 왜지..?
function 올바른괄호(s){
  if (s[0] === ")") {
    return false;
  }
  if (s[s.length-1] === "(") {
    return false;
  }
  
  let left = 0;
  let right = 0;
  
  for (let i=0; i<s.length; i++) {
    if (s[i] === "(") {
      left++;
    }
    if (s[i] === ")") {
      right++
    }
  }
  
  if (left === right) {
    return true;
  }
  
  return false;
}

function solution(s){
  let sum = 0;
  for (let i=0; i<s.length; i++) {
    if (s[i] === "(") {
      sum++
    }
    if (s[i] === ")") {
      sum--
    }
    if (sum<0) {
      return false
    }
  }
  
  return sum === 0 ? true : false
}