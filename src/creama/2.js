// 첫째단위가 1이 아니면 1로 1이면 다음자리 0으로 만드는게 최소
function findRange(num) {
  let [max, min] = [0,0];
  let maxChange = null;
  let minChange = null;
  let isOneNum = [null, true];

  for (let i=0; i<num.toString().length; i++) {
    if (!maxChange) {
      if (num.toString()[i] !== "9") {
        maxChange = num.toString()[i];
      }
    }
    if (!minChange) {
      if (num.toString()[0] !== "1") {
        minChange = num.toString()[i]
      }
      if (num.toString()[0] === "1" && num.toString()[i] !== "0" && i>0 && num.toString()[i] !== "1") {
        minChange = num.toString()[i]
      }
    }
    if (maxChange && minChange) {
      break;
    }
  }
  
  max = Number(num.toString().replaceAll(maxChange, "9"))
  
  if (minChange !== num.toString()[0]) {
    min = Number(num.toString().replaceAll(minChange, "0"))
  }
  if (minChange === num.toString()[0]) {
    min = Number(num.toString().replaceAll(minChange, "1"))
  }
  
  return (max- min)
}

findRange(112233445)