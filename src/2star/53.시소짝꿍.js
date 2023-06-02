// 시간초과
function solution(weights) {
  let count = 0;
  
  for (let i=0; i<weights.length; i++) {
    let left = weights[i]
    for (let j=i+1; j<weights.length; j++) {
      if (left/weights[j] === 1 || left/weights[j] === 1/2 || left/weights[j] === 2/3 || left/weights[j] === 3/4 || left/weights[j] === 2 || left/weights[j] === 1.5 || left/weights[j] === 4/3) {
        count++
      }
    }
  }
  return count
}

function 시소짝꿍(weights) {
  let answer = 0;
  const store = {};
  const ratios = [1, 3/2, 2, 4/3];

  weights.sort((a,b)=> b - a).forEach((weight) => {
    ratios.forEach((ratio)=>{
          if(store[weight * ratio]){
            answer += store[weight * ratio];
          }
      });
      if (!store[weight]) store[weight] = 1;
      else store[weight]++;
  });
  return answer;
}

