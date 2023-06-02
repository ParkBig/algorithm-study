function 대충만든자판(keymap, targets) {
  var answer = [];

  for (let i of targets) {
    let sum = 0;
    for (let j of i) {
      let coor = [];
      for (let k of keymap) {
        let index = k.indexOf(j)
        index !== -1 && coor.push(k.indexOf(j)+1);      
      }
      sum += Math.min(...coor)
    }
    answer.push(sum)
  }

  answer = answer.map(prop => prop===Infinity ? -1 : prop)

  return answer;
}
