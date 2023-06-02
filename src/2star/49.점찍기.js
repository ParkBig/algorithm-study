// 첫째 시도. arr의 길이가 너~무길어져서 에러 뜨는 경우 있음
function solution(k, d) {
  let props = Array.from({ length: d + 1 }, (_, i) => i);
  let arr = [];
  let cases = [];

  const dfs = (depth = 0) => {
    if (depth === 2) {
      cases.push([...arr]);
      return;
    }
    for (let i = 0; i < props.length; i++) {
      arr[depth] = props[i];
      dfs(depth + 1);
    }
  };
  dfs();

  return cases.filter(
    (prop) => Math.sqrt((prop[0] * k) ** 2 + (prop[1] * k) ** 2) <= d
  ).length;
}

function solution(k, d) {
  let props = Array.from({length: d/k+1}, (_,i) => i);
  let arr= [];
  let count = 0;
  const dfs = (depth = 0) => {
    if (depth === 2) {
      if (Math.sqrt((arr[0]*k)**2 + (arr[1]*k)**2) <= d) count++
      return
    }
    for (let i=0; i< props.length; i++) {
      arr[depth] = props[i]
      dfs(depth+1)
    }
  }
  dfs()
  
  return count
}

// 수학적 공식 이용 최대 값이 y인 좌표 내부에 찍을 수 있는 점의 개수는 소수 점을 제거한 y / k + 1 값과 같다.
function solution(k, d) {

  function equation(x) {
    return Math.sqrt(d * d - x * x);
  }
  let result = 0;
  for (let i = 0; i <= d; i += k) {
    const y = equation(i);
    result += Math.floor(y / k) + 1;
  }

  return result;
}
