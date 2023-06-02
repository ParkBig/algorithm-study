// 내풀이 시간초과 3개 있음
function 두큐합같게만들기(queue1, queue2) {
  let length = queue1.length;
  let sum1 = 0;
  let sum2 = 0;
  let pop = null;
  let count = 0;

  for (let i = 0; i < queue1.length; i++) {
    sum1 += queue1[i];
    sum2 += queue2[i];
  }

  while (sum1 !== sum2) {
    count++;
    if (sum1 > sum2) {
      pop = queue1.shift();
      queue2.push(pop);
      sum1 -= pop;
      sum2 += pop;
    } else {
      pop = queue2.shift();
      queue1.push(pop);
      sum1 += pop;
      sum2 -= pop;
    }
    if (count > length * 3) {
      count = -1;
      break;
    }
  }

  return count;
}

// 개쩌는 풀이 투포인터 활용
const 두큐합같게만들기 = (queue1, queue2) => {
  let sum1 = queue1.reduce((prev, cur) => prev + cur, 0);
  let sum2 = queue2.reduce((prev, cur) => prev + cur, 0);
  const half = (sum1 + sum2) / 2;
  const q = [...queue1, ...queue2];
  let q1Pointer = 0;
  let q2Pointer = queue1.length;

  for (let cnt = 0; cnt < queue1.length * 3; cnt++) {
    if (sum1 === half) {
      return cnt;
    }
    sum1 =
      sum1 > half
        ? sum1 - q[q1Pointer++ % q.length]
        : sum1 + q[q2Pointer++ % q.length];
  }

  return -1;
};
