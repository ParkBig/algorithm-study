function solution(plans) {
  plans.sort((a, b) => {
  const timeA = a[1];
  const timeB = b[1];

  if (timeA < timeB) {
    return -1;
  } else if (timeA > timeB) {
    return 1;
  } else {
    return 0;
  }
});
  let done = [];
  let stack = [];
  
  for (let i=0; i<plans.length; i++) {
    let nowTime = plans[i][1].split(":")
    let nowStartTime = +nowTime[0]*60 + +nowTime[1];
    let nextTime = plans[i+1] ? plans[i+1][1].split(":") : [0,0]
    let nextStartTime = +nextTime[0]*60 + +nextTime[1];
    let canWorkTime = nextStartTime - nowStartTime
    if (canWorkTime > 0) {
      if (canWorkTime >= +plans[i][2]) {
        done.push(plans[i][0]);
        canWorkTime -= +plans[i][2];
        while (canWorkTime > 0 && stack.length) {
          let spareWork = stack.pop();
          if (canWorkTime - spareWork[1] >= 0) {
            done.push(spareWork[0])
            canWorkTime -= spareWork[1];
          } else {
            stack.push([spareWork[0], spareWork[1]-canWorkTime]);
            canWorkTime = 0;
          }
          
        }
      } else {
        stack.push([plans[i][0],+plans[i][2] - canWorkTime])
      }
    } else {
      done.push(plans[i][0])
    }
  }
  while (stack.length) {
    done.push(stack.pop()[0])
  }
  
  return done
}