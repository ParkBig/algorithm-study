function 최솟값만들기(A,B){
  let answer = 0;
  let a = new Map();
  let b = new Map();

  for (let i=0; i<A.length; i++) {
    
    a.get(A[i]) ? a.get(A[i]).count++ : a.set(A[i], {count: 1});
    b.get(B[i]) ? b.get(B[i]).count++ : b.set(B[i], {count: 1});
  }

  for (let i=0; i<A.length; i++) {
    let aMin = Math.min(...[...a.keys()]);
    let bMax = Math.max(...[...b.keys()]);
    a.get(aMin).count--;
    b.get(bMax).count--;
    if (!a.get(aMin).count) {
      a.delete(aMin);
    }
    if (!b.get(bMax).count) {
      b.delete(bMax);
    }
    answer += aMin * bMax;
  }
  
  return answer
}

// 흠 젠장
function solution(A,B){
  let answer = 0;
  let a = new Array(1001).fill(0);
  let b = new Array(1001).fill(0);

  for (let i=0; i<A.length; i++) {
    a[A[i]]++;
    b[B[i]]++;
  }

  let aIndex = 0, bIndex = 1000;
  while (aIndex <= 1000 && bIndex >= 0) {
    if (a[aIndex] && b[bIndex]) {
      answer += aIndex * bIndex;
      a[aIndex]--;
      b[bIndex]--;
    }
    else if (!a[aIndex]) {
      aIndex++;
    }
    else if (!b[bIndex]) {
      bIndex--;
    }
  }
  
  return answer;
}
