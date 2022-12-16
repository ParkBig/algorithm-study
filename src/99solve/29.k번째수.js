// m sol
function solution(array, commands) {
    let arr =[];
    for (let i of commands) {
        arr.push((array.slice((i[0]-1),(i[1]))).sort((a,b)=>a-b)[i[2]-1])
    }
    return arr
}
