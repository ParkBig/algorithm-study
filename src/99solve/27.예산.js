// +예산을 딱 맞출떄. m sol 재귀 함수 만들어야한다. => 메인 함수안에 재귀함수 만들어서 사용 
function 예산을딱맞출때(d, budget) {
    // 처음에 전부 사용해서 테스트해서 되면 배열에 넣고
    // 그다음 길이 하나 줄여서 테스트하고
    // 또 길이 줄여서 테스트를 반복 길이가 1일때까지
    let arr = []
    let currentDepth = d.length;
    for (let i=1; i<d.length+1; i++) {
        let result = getCombinations(d,i)
        for (let j of result) {
            let sum = j.reduce((acc,cur)=>acc+cur);
            if (sum === budget) {
                arr.push(j)
                break;
            }
        }
    }
    return arr[arr.length-1].length;
}
// 재귀함수가 될 순열 함수
function getCombinations (arr, selectNumber) {
    const results = [];
    // n개중에서 1개 선택할 때(nC1)
    if (selectNumber === 1) {
        arr.map((el) => results.push([el]))
    } else {
        // 재귀 함수사용해야함
        arr.forEach((fixed, index, origin) => {
            // 해당하는 fixed를 제외한 나머지 뒤
            const rest = origin.slice(index + 1);
            // 나머지에 대해서 조합을 구한다.
            const combinations = getCombinations(rest, selectNumber - 1);
            //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
            const attached = combinations.map((el) => [fixed, ...el]);
            // 배열 spread syntax 로 모두다 push
            results.push(...attached);
        });
    }
    return results; // 결과 담긴 results return
}

// 대표 풀이
function solution(d, budget) {
    let answer = 0, sum = 0;
    d.sort((a,b) => a - b);
    for(let i = 0; i < d.length; i++){
        answer++;
        sum += d[i]
        if(sum > budget) {
            answer--;
            break;
        }
    }
    return answer
}
