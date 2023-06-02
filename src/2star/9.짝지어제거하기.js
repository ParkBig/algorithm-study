function 짝지어제거하기(s) {
  let stack = [];
  
  s = s.replace(/([a-zA-Z])\1/g, "");
  
  for (let i of s) {
    stack.push(i);
    if(stack[stack.length-1] === stack[stack.length-2]) {
      stack.splice(stack.length-2)
    }
  }
  
  return stack.length ? 0 : 1
}