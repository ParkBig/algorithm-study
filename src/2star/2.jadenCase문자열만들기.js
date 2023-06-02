function jadenCase문자열만들기(s) {
  let answer = "";
  let isCounting = [false, 0];
  let spaceArr = [];
  
  for (let i=0; i<s.length; i++) {
    if (s[i] === " ") {
      isCounting[0] = true;
      isCounting[1]++;
    }
    if ((isCounting[0] === true) && ((s[i] !== " ") || i === s.length-1)) {
      spaceArr.push(isCounting[1]);
      isCounting[0] = false;
      isCounting[1] = 0;
    }
  }

  s = s.toLowerCase().split(/\s+/g);

  for (let i=0; i<s.length; i++) {
    if (s[i]) {
      s[i] = s[i].replace(s[i][0], s[i][0].toUpperCase());
    }
  }
  
  for (let i=0; i<s.length; i++) {
    answer += s[i] + " ".repeat(spaceArr[i]);
  }
  
  console.log(answer)
  return(answer)
  
}