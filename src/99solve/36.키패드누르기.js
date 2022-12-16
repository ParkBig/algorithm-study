// m sol 와... 유클리드거리와 맨하튼거리 지렸다.. ㄷㄷ
function solution(numbers, hand) {
    // 버튼별 좌표 주입
    let a = "*7410852#963"
    let coordinates = {};
    for (let j =0; j<3; j++) {
        for (let k=0; k<4;k++) {
            coordinates[a[0]] = [j,k]
            a = a.substring(1)
        }
    }
    // 움직이며 좌표대조 시작
    let thumbMoving = "";
    let leftT = [0,0];
    let rightT =[2,0];
    for (let i of numbers) {
        if (i===1 || i ===4 || i ===7) {
            thumbMoving += "L"
            leftT = coordinates[i]
        }
        if (i===3 || i===6 || i===9) {
            thumbMoving +="R"
            rightT = coordinates[i]
        } 
        if (i===2 || i===5 || i===8 || i===0) {
            let leftDistance = Math.abs(coordinates[i][0] - leftT[0]) + Math.abs(coordinates[i][1] - leftT[1])
            let rightDistance = Math.abs(coordinates[i][0] - rightT[0]) + Math.abs(coordinates[i][1] - rightT[1])
            if (leftDistance < rightDistance) {
                thumbMoving += "L"
                leftT = coordinates[i];
            }
            if (leftDistance > rightDistance) {
                thumbMoving += "R"
                rightT = coordinates[i]
            }
            if (leftDistance === rightDistance) {
                if (hand === "right") {
                    thumbMoving += "R"
                    rightT = coordinates[i]
                } 
                if (hand === "left") {
                    thumbMoving += "L"
                    leftT = coordinates[i]
                }
            }
        }
    }
    return thumbMoving
}

// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0],"right"))


// 노가다 풀이
function 노가다풀이(numbers, hand) {
    var answer = '';
    // 숫자,문자의 위치를 좌표로 표현 여기서 0~9번째 인덱스에는 0~9번 키패드의 좌표를 넣었음
    var number = [[1,0],[0,3],[1,3],[2,3],[0,2],[1,2],[2,2],[0,1],[1,1],[2,1]]
    var left = [0,0]
    var right = [2,0]
    for(let i =0;i<numbers.length;i++){
      if(numbers[i] % 3 === 1){ //1,4,7은 3으로 나눴을때 나머지가 1인수이고 무조건 왼손으로 누르기 때문에 left를 해당 숫자키패드 좌표로 바꿈
          answer += "L"
          left = number[numbers[i]]
      }else if(numbers[i] % 3 === 0 && numbers[i] !== 0){ // 위와 같은 원리
          answer += "R"
          right = number[numbers[i]]
      }else{
           if(Math.abs(left[0] - number[numbers[i]][0]) + Math.abs(left[1] - number[numbers[i]][1])< Math.abs(right[0] - number[numbers[i]][0]) + Math.abs(right[1] - number[numbers[i]][1])){//2,5,8,0의 경우 가까운 손이 버튼을 누르니까 left,right와 number의 좌표값을 비교해 길이를 구한다음 짧은쪽의 손으로 누르고 left,right를 해당 넘버에 해당하는 좌표로 변경
            answer += 'L'
            left = number[numbers[i]]
        }else if(Math.abs(left[0] - number[numbers[i]][0]) + Math.abs(left[1] - number[numbers[i]][1])> Math.abs(right[0] - number[numbers[i]][0]) + Math.abs(right[1] - number[numbers[i]][1])){//아래와 같다
            answer += 'R'
            right = number[numbers[i]]
        }else{//이 조건은 left,rigth와 해당 숫자 좌표간의 거리가 같을때 이다 이 때는 hand에 들어온 값을 보고 변경해주면 된다
            if(hand === "right"){
                answer += 'R'
                right = number[numbers[i]]
            }else{
                answer += 'L'
                left = number[numbers[i]]
            }
        }
      }  

    }

    return answer
}