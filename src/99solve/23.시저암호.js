//my sol
function solution(s, n) {
    let arr = s.split("");
    let newArr= [];
    for(let i =0; i<arr.length; i++) {
        newArr.push(arr[i].charCodeAt());
    }
    for (let i =0; i<newArr.length; i++) {
        if (newArr[i]<91 && newArr[i]>64) {
            newArr[i] +=n;
            if (newArr[i]>90) {
                newArr[i] -=26;
            }
        }
        if (newArr[i]>96) {
            newArr[i] +=n;
            if (newArr[i]>122) {
                newArr[i] -=26;
            }
        }
    }
    for (let i=0; i<newArr.length; i++) {
        newArr[i] = String.fromCharCode(newArr[i])
    }
    return newArr.join("")
}

// 대표 풀이
function 대표풀이23(s, n) {
    var chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          "
    return s.split('').map(e => chars[chars.indexOf(e)+n]).join('');
}