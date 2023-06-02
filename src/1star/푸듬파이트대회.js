function 푸듬파이트대회(food) {
    var answer = '';
  
    let left = "";
    let right = "";
  
    for (let i=1; i<food.length; i++) {
      if (food[i]%2 === 0) {
        left += `${i}`.repeat(food[i]/2);
      } else {
        left += `${i}`.repeat(Math.floor(food[i]/2))
      }
    }
  
    for (let i=left.length-1; i>-1; i--) {
      right += left[i];
    }
 
    answer = left + "0" + right
    
    return answer;
}