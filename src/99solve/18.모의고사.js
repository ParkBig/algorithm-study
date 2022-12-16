// 내 풀이
function solution(answers) {
    let a = [1, 2, 3, 4, 5]; //5개
    let b = [2, 1, 2, 3, 2, 4, 2, 5]; //8개
    let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; //10개
    if (a.length < answers.length) {
        do {
            a = a.concat(a)
        } while (a.length<answers.length)
        if (a.length > answers.length) {
            a.length = answers.length;
        }
    } if (b.length < answers.length) {
        do {
            b = b.concat(b)
        } while (b.length<answers.length)
        if (b.length > answers.length) {
            b.length = answers.length;
        }
    } if (c.length < answers.length) {
        do {
            c = c.concat(c)
        } while (c.length<answers.length)
        if (c.length > answers.length) {
            c.length = answers.length;
        }
    }
    let countA = (a.filter((prop,index)=>prop === answers[index])).length;
    let countB = (b.filter((prop,index)=>prop === answers[index])).length;
    let countC = (c.filter((prop,index)=>prop === answers[index])).length;
    let array = [countA, countB, countC];
    let best = array.indexOf(Math.max(...array))
    let answer = [];
    for (let i=0; i<3; i++) {
        if (array[i]===array[best]) {
            answer.push(i+1)
        }
    }
    return answer;
}