// my sol
function solution(s) {
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let list = {"zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9 }
    let str = "";
    let arr = [];
    for (let i of s) {
        if (num.includes(parseInt(i))) {
            arr.push(parseInt(i))
        } 
        if (!num.includes(parseInt(i))) {
            str += i
        }
        if (num.includes(list[str])) {
            arr.push(list[str]);
            str = ""
        }
    }
    return +arr.join("")
}



