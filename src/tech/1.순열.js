// 순열 경우의 수 배열에 담는 버전
const permutation = (permu, rests, output) => {
  if (rests.length == 0) {
      return output.push(permu);
  }
  rests.forEach((v,idx) => {
      const rest = [...rests.slice(0,idx), ...rests.slice(idx+1)]
      permutation([...permu,v], rest, output);
  })
}

const output = [];
permutation([], ['a','b','c','d'], output);