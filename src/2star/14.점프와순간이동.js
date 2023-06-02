// 1차풀이. 다맞는데 시간복잡도 => dp 이용 다시품 => 2번째풀이
function 점프와순간이동(n) {
  let answer = 0;  

  while (n > 0) {
    let willMinus  = 0;
    for (let i=0; i<n+1; i++) {
      if (2**i > n) {
        willMinus = 2**(i-1);
        break;
      }
    }
    n = n - willMinus;
    answer++;
  }

  return answer;
}

// 두번째 dp 이용. dp가 더느리네?
// 아무래도 파인드인덱스 때문인거같군.
function 점프와순간이동(n) {
  let answer = 0; 
  let dp = [1];
  
  for (let i=1; i<Math.log2(n)+1; i++) {
    dp.push(2**i);
  }

  while (n > 0) {
    let willMinus  = dp[dp.findIndex(prop => prop>n)-1];
    n = n - willMinus;
    answer++;
  }

  return answer;
}

// 세번쨰 풀이. 이것도 하나 느리다네 ㄹㅇ. 일단 위에것들보다 빠름;
// 뭔가 이상해 똑같은 코든데 통과했다 실패했다 그럼. 결국 똑같은 코드로 성공;
function 점프와순간이동(n) {
  let answer = 0;  

  while (n > 0) {
    let willMinus  = Math.log2(n)%1 === 0 ? n : 2**Math.ceil(Math.log2(n)-1);
    n = n - willMinus;
    answer++;
  }

  return answer;
}