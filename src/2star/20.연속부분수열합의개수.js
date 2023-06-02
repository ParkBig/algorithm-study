function 연속부분수열합의개수(elements) {
  let length = elements.length;
  elements = elements.concat(elements);
  let can = [];

  for (let i=1; i<=length; i++) {
    
    for (let j=0; j<length; j++) {
      let test = elements.slice(j,j+i);
      can.push(test.reduce((sum, prop) => sum+prop));
      if (i===length) {
        break;
      }
    }
  }
  return [...new Set(can)].length;

}

// Set의 size, add로 바꾸자. can이 필요없음