// 내가 푼것
function solution(n) {
    let prepareArr = [];
    do {
        prepareArr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);
    prepareArr.sort((prev, next)=>next-prev);
    let string = ""; 
    prepareArr.forEach((prop)=>{string += prop+"";})
    return Number(string);
}

//대표 풀이
function solution(n) {
    const newN = n + "";
    const newArr = newN
      .split("")
      .sort()
      .reverse()
      .join("");
  
    return +newArr;
  }