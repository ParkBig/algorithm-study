// 내 풀이
function solution(x) {
    let addNum = 0;
    for (let i of (x+"").split("")) {
        addNum += Number(i)
    }
    return x%addNum === 0 ? true : false;
}
