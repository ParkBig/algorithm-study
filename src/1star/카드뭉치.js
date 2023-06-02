function 카드뭉치(cards1, cards2, goal) {
  var answer = 'Yes';

  for (let i of goal) {
    let done = false;
    
    if ((cards1[0] !== i) && (cards2[0] !== i)) {
      answer = "No";
      break;
    }
    
    if (cards1[0] === i) {
      cards1.shift();
      done = true
    }
    if (!done && (cards2[0] === i)) {
      cards2.shift();
      done = true
    }
    
    if (!done) {
      answer = "No"
      break;
    }
  }

  return answer;
}
