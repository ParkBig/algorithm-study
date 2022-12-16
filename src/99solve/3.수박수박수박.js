// 내가 푼것
function solution(n) {
    let answer = '';
    for (let i = 0; i<n; i++) {
        i%2===1 ? answer+="박" : answer+="수"
    }
    return answer;
}

//대표 풀이
const 대표풀이3 = n => "수박".repeat(n).slice(0,n);

//대표 풀이2
const 대표풀이3_1 = n => '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');

// repeat, slice함수에대해 공부

// "대상".repeat(n) = "대상"을 n번 반복한 문자열을 리턴함
// 대상.slice(0,n) = 대상을 index 0부터 n 전까지를 리턴함 