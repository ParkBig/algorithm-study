function 마법의엘리베이터(storey) {
  let numberArr = storey.toString().split("").map(Number);
  let count = 0;
  numberArr.unshift(0)
  
  for (let i=numberArr.length-1; i>-1; i--) {
    let target = numberArr[i];
    if (target > 9 && i !== 0) {
      numberArr[i-1] = numberArr[i-1] + 1;
      target = target - 10;
    }
    let round = Math.round(target/10)
    if (round) {
      if (target === 5 && numberArr[i-1] <5) {
        count += 5
      } else {
        count += (10-target)
        numberArr[i-1] = numberArr[i-1] + 1
      }
    } else {
      count += target
    }
  }
  
  return count
}

solution(5555)
// 이 예시를 통과못했었음
solution(545)