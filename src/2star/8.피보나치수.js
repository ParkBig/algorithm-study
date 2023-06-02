function 피보나치수(n) {
  let dp = [0,1];
  
  for (let i=2; i<n+1; i++) {
    dp[i] = (dp[i-1] + dp[i-2])%1234567;
  }

  return dp[n]
}