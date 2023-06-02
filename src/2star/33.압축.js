// 처음 풀이. 안되는게 있다.
function solution(msg) {
  let spell = ["HI", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let answer = [];

  for (let i=0; i<msg.length; i++) {
    let target = msg[i]
    let whileCount = 0;
    
    while (i+whileCount<=msg.length) {
      whileCount++;
      if ((spell.indexOf(target+msg[i+whileCount]) === -1)) {
        if (msg[i+whileCount]) {
          spell.push(target+msg[i+whileCount]);
        }
        answer.push(spell.indexOf(target));
        i += whileCount-1;
        break;
      }
      target += msg[i+whileCount];
    }
  }
  
  // console.log(spell)
  // console.log(answer)
  return answer
}

// 아 정신 나갔네 spell의 0번 인덱스 "HI"라고 적은거 0번인덱스 안쓰려고 한건데
// msg 에서 HI가 나올수도 있다는걸 잊음. 진짜 ㅠㅠ 정신 차리자.

function solution(msg) {
  let spell = [null, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let answer = [];

  for (let i=0; i<msg.length; i++) {
    let target = msg[i]
    let whileCount = 0;
    
    while (i+whileCount<=msg.length) {
      whileCount++;
      if ((spell.indexOf(target+msg[i+whileCount]) === -1)) {
        if (msg[i+whileCount]) {
          spell.push(target+msg[i+whileCount]);
        }
        answer.push(spell.indexOf(target));
        i += whileCount-1;
        break;
      }
      target += msg[i+whileCount];
    }
  }

  return answer
}