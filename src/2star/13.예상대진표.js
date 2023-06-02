function 예상대진표(n,a,b) {
  let answer = 0;

  if (a>b) {
    let A = a;
    a = b;
    b = A
  }
  
  if (b-a === 1 && b%2 ===0) {
    answer = 1;
  } else {
    while (n>2) {
      if (a<=(n/2) && b>(n/2)) {
        answer = Math.log2(n);
        break;
      }
      if (a>(n/2) && b>(n/2)) {
        a = a - (n/2);
        b = b - (n/2);
      }
      n = n/2
    }
  }
  
  return answer
}

// 남의 풀이 내거보다 느림
function 예상대진표(n, a, b) {
  let round = 1;

  while (a !== b) {
    if (Math.ceil(a / 2) === Math.ceil(b / 2)) {
      console.log(round)
      return round
    }

    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    round++;
  }
}