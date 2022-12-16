// 내풀이
function solution(n) {
    let baseNum = Math.sqrt(n);
    return (baseNum*10 === Math.floor(Math.sqrt(n))*10) ? (baseNum+1)**2 : -1
    //평범한 if 문
    // if (baseNum*10 === Math.floor(Math.sqrt(n))*10) {
    //     return baseNum;
    // } else {
    //     return -1;
    // }
}
