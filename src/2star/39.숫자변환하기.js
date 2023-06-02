// dp에대해 알게됨. 전체적으로 속도가 같음.

function solution(x, y, n) {
  if (x >= y) return 0;

  const dp = Array(y + 1).fill(Infinity);
  dp[x] = 0;

  for (let i = x + 1; i <= y; i++) {
    if (x <= i - n) {
      dp[i] = Math.min(dp[i], dp[i - n] + 1)
    };
    if (i % 2 === 0 && x <= i / 2) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    };
    if (i % 3 === 0 && x <= i / 3) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1)
    };
  }

  console.log(dp)
  return dp[y] === Infinity ? -1 : dp[y];
}

solution(11,40,5)

// 특정상황을 제외하고 일반적으로 매우 빠름

const queue = () => {
  const object = {};
  let start = 0;
  let end = 0;
  function push(element) {
      object[end++] = element;
  }
  function pop() {
      const value = object[start];
      delete object[start++];
      return value;
  }
  function isEmpty() {
      return start === end;
  }
  return {push, pop, isEmpty};
}

const COMMAND = [(x, n) => x + n, (x) => x * 2, (x) => x * 3];

function solution(x, y, n) {
  return bfs(x,y,n);
}

function bfs(x, y, n) {
  const queueInstance = queue();
  queueInstance.push({value: x, count: 0});
  const visited = new Set();
  while(!queueInstance.isEmpty()) {
      const {value, count} = queueInstance.pop();
      if(visited.has(value)) {
          continue;
      }
      visited.add(value);
      if(value === y) {
          return count;
      }
      COMMAND.forEach(v => {
          const result = v(value, n);
          if(result <= y) {
              queueInstance.push({value: result, count: count + 1});
          }
      })
  }
  return -1;
}
