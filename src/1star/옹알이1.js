function 옹알이1(babbling) {
  let answer = 0;
  let can = ["aya", "ye", "woo", "ma"];
  
  for (let i of babbling) {
    let sift = "";
    for (let j of i) {
      sift += j;
      if (can.includes(sift)) {
        sift = "";
      }
    }
    if (!sift) {
      answer++
    }
  }
  
  return answer
}