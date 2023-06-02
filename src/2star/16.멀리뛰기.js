function 멀리뛰기(n) {
  let answer = 0;
  
  let factoDp = [1,1];
  for (let i=1; i<n; i++) {
    factoDp.push(((i+1)*factoDp[i])%1234567)
  }
  
  for (let i=0; i<=n/2; i++) {
    answer += factoDp[n-i]/((factoDp[i])*(factoDp[n-i-i]))
  }
  
  console.log(answer)
  return answer
}


// 피보나치였다.. ㅁㄴㅇ먀ㅔㄴ어멘어ㅐㅔㅁㄴ어
function solution(n) {
  let dp = [0, 1];
  
  for (let i=1; i<n+1; i++) {
    dp.push((dp[i] +dp[i-1])%1234567)
  }
  
  return dp[n+1];
}