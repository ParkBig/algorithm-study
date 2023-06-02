function solution(numbers) {
  let answer = 0;
  let visitedArr = new Array(numbers.length).fill(false);
  let madeIndexComArr = [];
  let madeNumArr = [];

  const dfs = (num) => {
    for (let i=0; i<numbers.length; i++) {
      if (!visitedArr[i]) {
        visitedArr[i] = true;

        if (num) {
          let newNum = [...num, i];
          let com = "";
          for (let j of newNum) {
            com += numbers[j];
          }
          madeIndexComArr.push(newNum);
          madeNumArr.push(com);
          dfs(newNum);
        } else {
          madeIndexComArr.push([i]);
          madeNumArr.push(numbers[i]);
          dfs([i]);
        }

        visitedArr[i] = false;
      }
    }
  }

  dfs();

  madeNumArr  = [...new Set(madeNumArr.map(Number))];

  for (let i of madeNumArr) {
    if (i>1) {
      let isPrime = true;
      for (let j=2; j<=Math.sqrt(i); j++) {
        if (i%j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        answer++
        console.log(i)
      }
    }
  }

  return answer;
}