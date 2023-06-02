function 튜플(s) {
  let answer = [];
  s = s.slice(2, s.length-2).split("},{").map(prop => prop.split(",").map(Number)).sort((a,b)=> a.length-b.length);

  for (let i of s) {
    for (let j of i) {
      let isHas = answer.includes(j);
      if (!isHas) {
        answer.push(j)
      }
    }
  }

  return answer;
}