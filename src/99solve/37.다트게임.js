// m sol
function solution(dartResult) {
    let arr = []
    for (let i=0; i<dartResult.length; i++) {
        if (+dartResult[i]%1 ===0) {
            if (+dartResult[i+1]%1 ===0) {
                arr.push([10,dartResult[i+2]]);
                i++
            } else {
                arr.push([+dartResult[i],dartResult[i+1]])
            }
        }
        if (dartResult[i]==="*" || dartResult[i]==="#") {
            arr.push([null,dartResult[i]])
        }
    }
    for (let i=0; i<arr.length; i++) {
        if (arr[i][1] ==="S") {
            arr[i] = arr[i][0];
        }
        if (arr[i][1] ==="D") {
            arr[i] =arr[i][0]**2
        }
        if (arr[i][1] ==="T") {
            arr[i] = arr[i][0]**3
        }
        if (arr[i][1]==="*") {
            arr[i-2] = arr[i-2]*2;
            arr[i-1] = arr[i-1]*2
            arr.splice(i,1)
            i--
        }
        if (arr[i][1] ==="#") {
            arr[i-1] = arr[i-1]*(-1);
            arr.splice(i,1)
            i--
        }
    }
    let sum = 0;
    for (let i=0; i<3; i++) {
        sum += arr[i]
    }
    return sum
}
