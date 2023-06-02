function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// 핵심 아이디어까지 맞춤
function solution(n, k) {
  let len = n
  let num = Array.from({length: n}, (_,i) => i+1);
  let facto = num.reduce((acc,prop) => acc * prop, 1);
  let numIndex = []
  let ans = []
  
  
  while (numIndex.length < len) {
    numIndex.push(Math.floor((k-1) / factorial(n-1)));
    k = k % factorial(n-1);
    n = n-1
  }
  
  console.log(numIndex)
  
  for (let i of numIndex) {
    ans.push(num[i]);
    num = num.filter((_,index) => index !== i)
  }
  
  console.log(ans)
}


function solution(n, k) {
  let numArr = Array.from({length: n}, (_,i) => i+1);
  let facto = numArr.reduce((acc,prop) => acc * prop, 1);
  let ans = []
  
  while (numArr.length) {
    facto = facto / numArr.length;
    ans.push(...numArr.splice(Math.floor((k-1)/facto), 1))
    k = k % facto
  }
  
  return ans
}