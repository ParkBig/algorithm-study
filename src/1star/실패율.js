function 실패율(N, stages) {
  let answer = [];
  let failRate = {};
  let passedPeople = stages.length;

  for (let stage = 1; stage <= N; stage++) {
    let proceedCount = 0;
    for (let i of stages) {
      if (i === stage) {
        proceedCount++;
      }
    }
    failRate[proceedCount / passedPeople] = failRate[proceedCount / passedPeople] ? [...failRate[proceedCount / passedPeople], stage] : [stage];
    passedPeople -= proceedCount;
  }

  let failRateKeys = [];
  for (let i in failRate) {
    failRateKeys.push(i)
  }
  failRateKeys.sort((a, b) => b - a);
  for (let i of failRateKeys) {
    answer.push(...failRate[i])
  }

  return answer;
}

// 내꺼보다 빠른거
function solution(N, stages) {
  var answer = [];

  let array1 = new Array(N+2).fill(0);
  stages.map(item => {
      array1[item]++;
  })

  let sum = array1[N+1];

  for(let i=N;i>=1;i--){
      sum += array1[i];
      if(sum == 0)
          answer[i-1] = {stage: i, errorRate: 0};

      else 
          answer[i-1] = {stage: i, errorRate: array1[i]/sum};
  }


  answer.sort((a, b) => {
      if (a.errorRate === b.errorRate) return a.stage - b.stage
      else return b.errorRate - a.errorRate
  });

  return answer.map(item => item.stage)
}