// m sol 시간복잡도 말곤 테스트 전부 통과
function solution(n) {
    if (n === 1) return 1
    let count = 1;
    let sub = 0;
    const len = n / 2 + 1
    for (let i = 1; i < len; i++) {
        for (let j = i; j < len+1; j++) {
            sub += j
            if (sub === n) {
                count++;
                sub = 0;
                break;
            }
            if (sub > n) {
                sub = 0;
                break;
            }
        }
    }
    return count
}

// 미친놈이 품 자연수 합~ 은 약수 의 홀수의 개수와 같다.
function 대표풀이(n) {
    let answer = 0;
    for (let i = 0; i <= n; i++) {
        if (n % i === 0 && i % 2 === 1) answer++;
    }
    return answer;
}