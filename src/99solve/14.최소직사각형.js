// 내 풀이
function solution(sizes) {
    let newSizes = sizes.map((prop)=>prop[1]>prop[0] ? prop.reverse() : prop);
    let leftArray = newSizes.map((prop)=>prop[0]);
    let rightArray = newSizes.map((prop)=>prop[1]);
    return Math.max(...leftArray) * Math.max(...rightArray)
}