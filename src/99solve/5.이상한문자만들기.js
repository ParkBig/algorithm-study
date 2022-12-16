// 내가 푼것
function solution(s) {
    let split = s.split(" ");
    for (let i=0; i<split.length; i++) {
        split[i] = upper(split[i])
    }
    return split.join(" ")
}

function upper(str)  {
    let string = ""
    for (let i=0; i<str.length; i++) {
        if (i%2===0) {
            string += str[i].toUpperCase()
        } else {
            string += str[i].toLowerCase()
        }
    }
    return string
}
// console.log(solution("try hello world"))
