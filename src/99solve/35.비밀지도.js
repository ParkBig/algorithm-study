// m sol
function solution(n, arr1, arr2) {
    let array =[]
    let secArr = []
    for (let j of [arr1,arr2]) {
        for (let i of j) {
            let arr = []
            while (i>0) {
                arr.push(i%2);
                i = parseInt(i/2)
            }
            while (arr.length < n) {
                arr.push(0)
            }
            array.push(arr.reverse())
        }
    }
    for (let i=0; i<n; i++) {
        let arr = [];
        for (let j=0; j<n; j++) {
            if (array[i][j] || array[i+n][j]) {
                arr.push("#");
            } else {
                arr.push(" ")
            }
        }
        secArr.push(arr)
    }
    return secArr.map((prop)=>prop.join(""))
}