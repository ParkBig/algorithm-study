function 가장가까운같은글자(s) {
  var answer = [];
  let arr = []

  for (let i=0; i< s.length; i++) {
    let a = s.split("").map((prop,index) => (prop===s[i])&&(index<=i) ? index : null)
    arr.push([...new Set(a)])
  }
  
  for (let i of arr) {
    let a = i.filter(prop => prop !== null)
    if (a.length<2) {
      answer.push(-1)
    } else {
      answer.push(a[a.length-1] - a[a.length-2])
    }
  }

  return answer;
}
