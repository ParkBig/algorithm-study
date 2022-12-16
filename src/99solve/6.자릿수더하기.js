// 내가 푼것
function solution(n) {
    let str = String(n);
    let num = 0;
    for (let i of str) {
        num += Number(i)
    }
    return num;
}

//대표 풀이
function 대표풀이6(n){
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}