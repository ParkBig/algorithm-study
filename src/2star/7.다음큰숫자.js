function 다음큰숫자(n) {
  let answer = 0;
  
  let binary = n.toString(2);
  binary =binary.replace(/0/g, "");
  
  while (true) {
    n++;
    let willFirstBig = n.toString(2);
    willFirstBig = willFirstBig.replace(/0/g, "");
    if (willFirstBig.length === binary.length) {
      answer = n;
      break;
    }
  }
  
  return answer
}