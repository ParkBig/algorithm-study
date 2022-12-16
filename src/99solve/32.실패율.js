// m sol
function solution(N, stages) {
    let dataArr = [];
    let returnArr = [];
    let challenger = stages.length;
    for (let i=1; i<N+1; i++) {
        let stage = i;
        let yetClear = 0;
        let data = {} // {스테이지넘버 : 실패율}
        for (let j=0; j<stages.length; j++) {
            if (stage === stages[j]) {
                yetClear++;
            }
        }
        data["stage"] = stage;
        data["failRate"] = yetClear/challenger;
        dataArr.push(data)
        challenger -= yetClear
    }
    dataArr.sort((a,b)=>b.failRate-a.failRate)
    for (let i of dataArr) {
        returnArr.push(i.stage)
    }
    return returnArr
}

// 대표풀이
function 대표풀이32(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}