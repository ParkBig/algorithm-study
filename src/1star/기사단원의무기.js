function 기사단원의무기(number, limit, power) {
  var answer = 0;

  let test = []

  for (let i=1; i<=number; i++) {
    let a = []
    for (let j=1; j<=Math.sqrt(i); j++) {
      if(i % j === 0) {
        a.push(j);
        if(i / j != j) {
          a.push(i / j)
        };
      }
    }
    test.push(a.length);
  }

  test.map(prop => prop <= limit ? answer+=prop : answer+=power)
  
  return answer;
}