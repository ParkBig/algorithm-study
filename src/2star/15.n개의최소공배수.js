function n개의최소공배수(arr) {
  
  let answer = 0;
  let map = new Map();
  let num = 1;
  
  while (!map.get("done")) {
    for (let i of arr) {
      map.get(i*num) ? map.get(i*num).count++ : map.set(i*num, {count: 1});
      if (map.get(i*num).count === arr.length) {
        answer = i*num;
        map.set("done", true);
      }
    }
    num++;
  }
  
  return answer
}

// 신기한 풀이
function gcd(a, b) {
  return a % b ? gcd(b, a%b) : b
}

function n개의최소공배수(num) {
  return num.reduce((a,b) => a*b / gcd(a,b))  
 }
 