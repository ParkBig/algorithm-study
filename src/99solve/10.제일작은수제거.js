function solution(arr) {
    return arr.length>1 ? arr.filter((prop)=> prop !==Math.min(...arr)) : [-1]
    // if (arr.length >1) {
    //     let min = Math.min(...arr);
    //     return arr.filter((prop)=>prop !== min);
    // } else {
    //     return [-1]
    // }
}
