// 최소값을 오름 차순으로 정렬후 
function 요격시스템(targets) {
  targets.sort((a, b) => b[0] - a[0]);

  let answer = 1;
  let checkPoint = targets[0][0];

  for (let i = 1; i < targets.length; i++) {
    const [start, end] = targets[i];

    if (end <= checkPoint) {
      checkPoint = start;
      answer++;
    }
  }

  return answer;
}

// 내 풀이
// 나는 구간 길이가 짧은거로 정렬후 거기에 포함된걸 지우면서 카운트 늘리는 식으로함
// 고로 시간복잡도 n^2가 되었고 시간초과 발생;
function solution(targets) {
  let count = 0;
  let findShort = targets.sort((a,b) =>(a[1]-a[0]) - (b[1]-b[0]));
  
  for (let i of findShort) {
    let [min, max] = i
    targets = targets.filter(prop => !(prop[1] > min && prop[0] < max));
    count++;
    if (!targets.length) {
      break;
    }
  }
  
  return count
}
