//m sol
function solution(n) {
    let sub = 0;
    for (let i=1; i<n+1; i++) {
        if (n%i === 0) {
            sub += i;
        }
    }
    return sub
}