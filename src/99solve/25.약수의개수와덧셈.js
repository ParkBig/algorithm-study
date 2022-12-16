// m sol
function solution(left, right) {
    let arr = [];
    let even = 0;
    let odd = 0;
    for (let i=left; i<right+1; i++) {
        arr.push(i)
    }
    for (let i of arr) {
        let base = i;
        let count = 0;
        for (let j=1; j<i+1; j++) {
            if (base%j ===0) {
                count++
            }
        }
        if (count%2 ===0) {
            even += base;
        } else {
            odd +=base
        }
    }
    return even - odd
}

// 대표풀이
function 대표풀이25(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}