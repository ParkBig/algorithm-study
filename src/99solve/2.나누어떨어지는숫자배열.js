// 내가 푼것
function solution(arr, divisor) {
    var answer = [];
    for (prop of arr)  {
        if (prop % divisor === 0) {
            answer.push(prop)
        }
    }
    answer.sort((prev,next)=>prev-next);
    if (answer.length === 0) {
        answer.push(-1)
    }
    return answer;
}

// 대표 풀이
function 대표풀이2(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}

// map 은 생각했지만 filter는 생각못함 ㅇㅇ
// 리턴을 삼항연산자로 한다는게 매우 인상적