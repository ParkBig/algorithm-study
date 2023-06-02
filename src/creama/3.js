function maxLength(a, k) {
  let set = new Set()
  
  for (let i=0; i<a.length; i++) {
    let sum = a[i];
    let count = 1;
    while (sum <= k) {
      sum += a[i + count];
      count++
      
    }
    set.add(count-1)
  }
  
  return Math.max(...set)
}