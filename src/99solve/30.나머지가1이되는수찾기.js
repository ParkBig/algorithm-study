// m sol
function solution(n) {
    let div = 1;
    while (true) {
        if (n % div === 1) {
            return div
        }
        div++
    }
}

// 대표풀이
function 대표풀이30(n, x = 1) {    
    while (x++) {
        if (n % x === 1) {
            return x;
        }
    }    
}