// 특별
function 조이스틱(name) {
  let alphabet = {
    'A': 0,
    'B': 1,
    'C': 2,
    'D': 3,
    'E': 4,
    'F': 5,
    'G': 6,
    'H': 7,
    'I': 8,
    'J': 9,
    'K': 10,
    'L': 11,
    'M': 12,
    'N': 13,
    'O': 14,
    'P': 15,
    'Q': 16,
    'R': 17,
    'S': 18,
    'T': 19,
    'U': 20,
    'V': 21,
    'W': 22,
    'X': 23,
    'Y': 24,
    'Z': 25
  }
  let haveToChangeIndex = name.split("").map((prop,index) => (prop !== "A") && index);
  let withOutTerminal = haveToChangeIndex.filter((prop) => prop !== false && prop !==0 && prop !== haveToChangeIndex.length-1 );
  let direction = name.length - Math.max(...withOutTerminal) > Math.min(...withOutTerminal) - 0 ? "right" : "left";
  if (!withOutTerminal.length) direction = "left";

  if (direction === "right") {
    let count = -1;
    let index = 0;
    while (index <= haveToChangeIndex[haveToChangeIndex.length-1]) {
      if (name[index] !== "A") {
        let target = name[index];
        count += Math.min(alphabet[target], 26-alphabet[target])
      }

      index++;
      count ++;
    }
  
    console.log(count)
  } else {
    let count = 0;
    if (name[0] !== "A") {
      count += Math.min(alphabet[target], 26-alphabet[target])
    }
    let index = haveToChangeIndex[haveToChangeIndex.length-1];
    
  }

  
}

function 조이스틱(name) {
  let answer = 0;
  let min_move = name.length - 1;

  [...name].forEach((n, i) => {
    answer += Math.min(n.charCodeAt() - 65, 91 - n.charCodeAt());
    let idx = i + 1;

    // 연속되는 A의 개수 count
    while (idx < name.length && name[idx] === 'A') {
      idx++;
    }

    console.log("@",min_move,i * 2 + name.length - idx,i + 2 * (name.length - idx))
    min_move = Math.min(
      min_move,
      i * 2 + name.length - idx,
      i + 2 * (name.length - idx),
    );
    console.log(n,idx,min_move)
  });

  return answer + min_move;
}


solution("JEROEN")