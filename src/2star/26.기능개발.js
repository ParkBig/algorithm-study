function 기능개발(progresses, speeds) {
  let answer = [];
  while (progresses[0]) {
    for (let i=0; i<progresses.length; i++) {
      progresses[i] += speeds[i];
    }
    if (progresses[0] >= 100) {
      let doneCount = progresses.findIndex(prop => prop <100);
      if (doneCount === -1) {
        answer.push(progresses.length);
        break;
      } else {
        progresses.splice(0,doneCount);
        speeds.splice(0,doneCount);
        answer.push(doneCount);
      }
    }
  }
  
  return answer
}