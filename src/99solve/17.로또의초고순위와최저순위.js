// 내 풀이
function solution(lottos, winNum) {
    let winner = [6,6,5,4,3,2,1];
    let best = (lottos.filter((prop)=>prop===0)).length;
    let iGot = (lottos.filter((prop)=>prop!==0).filter((prop)=>winNum.includes(prop))).length;
    return [winner[best+iGot],winner[iGot]]
}
