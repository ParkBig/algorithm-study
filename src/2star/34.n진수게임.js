function n진수게임(n, t, m, p) {
  let ans = "";
  let transNum = []
  let binary = n.toString(n)
  
  for (let i=0; i<=(t-1) * m + p ; i++) {
    let trans = i.toString(n)
    if (trans >= binary) {
      transNum.push(...trans.split(""))
    } else {
      transNum.push(trans)
    }
  }
  
  for (let i=0; i<transNum.length; i++) {
    if ((i % m + 1) === p) {
      ans+=transNum[i];
    }
    if (ans.length === t) {
      break;
    }
  }
  
  return ans.toUpperCase()
}