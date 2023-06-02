function 크기가작은부분문자열(t, p) {
  var answer = 0;
  
  for (let i =0; i< t.length - p.length +1; i++) {
    if (Number(t.slice(i,i+p.length)) <= Number(p)) {
      answer++
    };
  };

  return answer;
}
