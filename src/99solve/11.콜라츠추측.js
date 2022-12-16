// 내 풀이
function solution(num) {
    let count = 0;
    if (num ===1) {
        return 0
    }
    while (num >1) {
        if (count>500) {
            return -1
        } if (num%2 === 0) {
            num = num/2;
            count++
        } else {
            num = (num*3)+1
            count++
        }
    }
    return count
}

// 대표풀이
function 대표풀이11(num) {
    var answer = 0;
    while (num !=1 && answer !=500) {
        num%2==0 ? num = num/2 : num = num*3 +1;
        answer++;
    }
    return num == 1 ? answer : -1;
}