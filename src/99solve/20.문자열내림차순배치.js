// 내 풀이
function solution(s) {
    let lowArr = [];
    let upperArr = [];
    for (let i in s) {
        if (s[i] === s[i].toLowerCase()) {
            lowArr.push(s[i]);
        } else {
            upperArr.push(s[i]);
        }
    }
    lowArr.sort().reverse();
    upperArr.sort().reverse();
    return lowArr.concat(upperArr).join("")
}

// 대표풀이
function 대표풀이20(s) {
  return s
    .split("")
    .sort()
    .reverse()
    .join("");
}