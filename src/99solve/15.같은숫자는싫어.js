// 내 풀이
function solution(arr) {
    let newArray = [];
    // for (let i in arr) {
    //     if (arr[Number(i)]!==arr[Number(i)+1]) {
    //         newArray.push(arr[i])
    //     }
    // }
    for (let i=0; i<arr.length; i++) {
        if (arr[i]!==arr[i+1]) {
            newArray.push(arr[i])
        }
    }
    return newArray
}

// 대표 풀이
function 대표풀이15(arr) {
    return arr.filter((val,index) => val != arr[index+1]);
}