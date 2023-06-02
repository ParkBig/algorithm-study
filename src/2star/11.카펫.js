function 카펫(brown, yellow) {
  let sum = brown + yellow;
  
  for (let i=3; i<sum; i++) {
    if (sum%i === 0) {
      let width = sum / i;
      
      if ((width-2) * (i-2) === yellow) {
        return [width, i]
      }
    }
  }
}