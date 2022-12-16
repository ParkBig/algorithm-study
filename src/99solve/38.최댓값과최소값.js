// m sol
function solution(s) {
    let b = s.split(" ")
    let c = b.map((prop)=>Number(prop))
    return [Math.min(...c), Math.max(...c)].join(" ")
}


// Math.min 과 max 는 문자열 숫자도 가능하다.