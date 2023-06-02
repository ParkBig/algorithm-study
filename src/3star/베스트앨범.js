function solution(genres, plays) {
  let data = {};
  let t = [];
  let answer = [];
  
  for (let i=0; i< genres.length; i++) {
    if (data[genres[i]]) {
      data[genres[i]].plays.push([i, plays[i]]);
      data[genres[i]].sum += plays[i];
    } else {
      data[genres[i]] = { plays: [[i, plays[i]]], sum: plays[i] }
    }
  }
  
  for (let i in data) {
    data[i].plays.sort((a,b) => b[1] === a[1] ? a[0] - b[0] : b[1] - a[1]);
    t.push(data[i])
  }
  
  t.sort((a,b) => b.sum - a.sum)
  
  for (let i of t) {
    if (i.plays.length >1) {
      for (let j=0; j<= i.plays.length/2 ; j+=2) {
        answer.push(i.plays[j][0]);
        answer.push(i.plays[j+1][0]);
      }
    } else {
      answer.push(i.plays[0][0])
    }
  }
  
  console.log(answer)
  return answer
}