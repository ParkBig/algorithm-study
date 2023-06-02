function 귤고르기(k, tangerine) {
  let answer= 0;
  let disting = {};
  let sum = 0;

  for (let i of tangerine) {
    disting[i] = disting[i] ? disting[i]+1: 1;
  }

  let countArr = Object.values(disting).sort((a,b) => b-a);

  for (let i=0; i<countArr.length; i++) {
    sum+=countArr[i];
    answer++;
    if (sum >= k) {
      break;
    }
  }

  return answer;
}