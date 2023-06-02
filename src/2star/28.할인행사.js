function 할인행사(want, number, discount) {
  let result = 0;
  let iWant = {};
  
  for (let i=0; i<want.length; i++) {
    iWant[want[i]] = number[i];
  }
  
  for (let i=0; i<discount.length-9; i++) {
    let dupIwant = {...iWant};
    let discountList = discount.slice(i,i+10);
    
    for (let i of discountList) {
      if (dupIwant[i]) {
        dupIwant[i]--
      }
    }
    if (([...new Set(Object.values(dupIwant))].length === 1) && ([...new Set(Object.values(dupIwant))][0] === 0)) {
      result++
    }
  }
  
  return result;
}
