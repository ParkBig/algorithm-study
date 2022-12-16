// 내가 푼것
function solution(a, b) {
    const getDate = new Date(2016, a-1, b);
    const date = getDate.getDay()
    const dateArray = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    const answer = dateArray[date];
    return answer;
}
// 대표 풀이
function 대표풀이1(a,b){
    var date = new Date(2016, (a - 1), b);
    return date.toString().slice(0, 3).toUpperCase();
}

