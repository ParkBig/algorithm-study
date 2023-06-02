function 완주하지못한선수(participant, completion) {
  let answer ="";

  let distin = {};
  
  for (let i of participant) {
    distin[i] = distin[i] ? distin[i]+1 : 1;
  }

  for (let i of completion) {
    distin[i]--;
  }

  for (let i in distin) {
    if (distin[i]) {
      answer = i;
    }
  }

return answer;
}