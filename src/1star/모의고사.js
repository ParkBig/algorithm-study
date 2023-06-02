function 모의고사(answers) {
  let one = [1,2,3,4,5];
  let two = [2,1,2,3,2,4,2,5];
  let thr = [3,3,1,1,2,2,4,4,5,5]
  
  let count = [0,0,0];
  
  for (let i=0; i<answers.length; i++) {
    if (answers[i] === one[i%5]) {
      count[0]++;
    }
    if (answers[i] === two[i%8]) {
      count[1]++;
    }
    if (answers[i] === thr[i%10]) {
      count[2]++;
    }
  }
  
  let answer = [];
  let best = Math.max(...count);
  
  
  count.forEach((prop,index) => {
    if (prop === best) {
      answer.push(index+1)
    }
  })
  
  return answer;
}