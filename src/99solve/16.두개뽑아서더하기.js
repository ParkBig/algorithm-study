// 내 풀이
function solution(numbers) {
    let arr = [];
    for (let i=0; i<numbers.length-1; i++) {
        let target = numbers[i];
        for (let j=i+1; j<numbers.length; j++) {
            arr.push(target+numbers[j]);
        }
    }
    return arr.filter((prop,index)=>arr.indexOf(prop)===index).sort((a,b)=>a-b)
}
