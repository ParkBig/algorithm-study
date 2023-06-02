function 추억점수(name, yearning, photo) {
  let answer = [];
  let map = new Map();
  let sum = 0;
  
  for (let i=0; i<name.length; i++) {
    sum += yearning[i];
    map.set(name[i], yearning[i]);
  }
  
  for (let i of photo) {
    let misSum = 0;
    for (let j of i) {
      let who = map.get(j);
      if (who) {
        misSum += who;
      }
    }
    answer.push(misSum)
  }
  
  return answer;
}