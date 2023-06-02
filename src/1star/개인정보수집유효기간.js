function 개인정보수집유효기간(today, terms, privacies) {
  var answer = [];

  let nowDate = new Date(today);
  let validate = {};

  for (let i of terms) {
    validate[i[0]] = Number(i.slice(2));
  }

  for (let i=0; i<privacies.length; i++) {
    let ins = privacies[i].split(" ");
    let date = new Date(ins[0]);
    date.setMonth(date.getMonth() + validate[ins[1]]);
    if (date.getDate() ===1) {
      date.setMonth(date.getMonth() -1);
      date.setDate(28);
    } else {
      date.setDate(date.getDate() -1);
    }
    console.log(date.toLocaleDateString())
    
    if (date < nowDate) {
      answer.push(i+1)
    }
  }

  return answer;
}
