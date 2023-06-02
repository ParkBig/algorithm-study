function 이진변환반복하기(s) {
  let zeroCount = 0;
  let transCount = 0;

  while (s.length>1) {
    beforeLength = s.length;
    s = s.replace(/0/g, "");
    afterLength = s.length;
    zeroCount += beforeLength - s.length;

    let trans = "";
    while (afterLength>=1) {
      if (afterLength === 1) {
        trans = "1" + trans;
        break;
      }
      trans =(afterLength % 2) + trans;
      afterLength = Math.floor(afterLength/2);
    }

    transCount++
    s = trans;
  }

  return [transCount, zeroCount]
}