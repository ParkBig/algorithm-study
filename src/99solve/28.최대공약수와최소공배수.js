// m sol // 중복만 따로뽑는 경우 공부함 
function solution(n, m) {
    let maxArr = [];
    let newMinArr = [];
    let minMul= 1;
    for (let i=1; i<n+1; i++) {
        if (n%i === 0) {
            maxArr.push(i);
        }
    }
    for (let i=1; i<m+1; i++) {
        if (m%i === 0) {
            maxArr.push(i)
        }
    }
    for (let i =0; i<maxArr.length; i++) { // 중복만 따로 뽑음
        if (!(maxArr.indexOf(maxArr[i])===maxArr.lastIndexOf(maxArr[i]))) {
            newMinArr.push(maxArr[i])
        }
    }
    while(true) {
        if (minMul%n ===0 && minMul%m ===0) {
            break;
        }
        minMul++
    }
    return [Math.max(...newMinArr) ,minMul]
}

//풀이 이런걸 어캐생각함 ㅋㅋ
function 미친놈이푼거(a, b) {
    var r;
    for(var ab= a*b; r = a % b; a = b, b = r){}
    return [b, ab/b];
}
