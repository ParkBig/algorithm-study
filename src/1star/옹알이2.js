function 옹알이2(babbling) {
  var answer = 0;
  let can = ["aya", "ye", "woo", "ma"]

  for (let i of babbling) {
    let stack = "";
    let isOk = false;
    let prev = "";
    for (let j of i) {
      stack += j;
      isOk = false;
      if (can.includes(stack) && (stack !== prev)) {
        isOk = true;
        prev = stack
        stack = "";
      }
    }
    if (isOk) {
      answer++;
    }
  }

  return answer;
}