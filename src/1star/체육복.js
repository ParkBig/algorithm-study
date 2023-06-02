function 체육복(n, lost, reserve) {
  let newLost = [];
  lost.forEach((ele)=> reserve.indexOf(ele) !== -1 ?  reserve.splice(reserve.indexOf(ele),1) : newLost.push(ele));
  newLost.sort((a,b)=>a-b);
  reserve.sort((a,b)=>a-b);
  let count = n-newLost.length;
  for (let i=0; i<newLost.length; i++) {
      let lostNum = newLost[i];
      for (let j=0; j<reserve.length; j++) {
          if ((lostNum-1 ===reserve[j]) || (lostNum+1 ===reserve[j])) {
              count++
              reserve[j] = null;
              break;
          } 
      }
  }
  return count
}