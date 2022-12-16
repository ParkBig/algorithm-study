// 내가 푼것
function solution(n) {
    let str = n+""
    answer = [];
    for (let i of str) {
        answer.push(Number(i))
    }
    return answer.reverse();
}

// 대표풀이
function 대표풀이7(n) {
    // 문자풀이
    return (n+"").split("").reverse().map(v => parseInt(v));
}
// 대표풀이2
function 대표풀이7_1(n) {
    var arr = [];
    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);
    return arr;
}
