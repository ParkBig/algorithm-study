function 성격유형검사하기(survey, choices) {
  var answer = '';

  let indicators = {
    1: { R: 0, T:0 },
    2: { C: 0, F:0 },
    3: { J: 0, M:0 },
    4: { A: 0, N:0 },
  }
  let score = [3,2,1,null,1,2,3];

  const t = (string, score) => {
    if (string === "R") return indicators[1]["R"] += score;
    if (string === "T") return indicators[1]["T"] += score;
    if (string === "C") return indicators[2]["C"] += score;
    if (string === "F") return indicators[2]["F"] += score;
    if (string === "J") return indicators[3]["J"] += score;
    if (string === "M") return indicators[3]["M"] += score;
    if (string === "A") return indicators[4]["A"] += score;
    if (string === "N") return indicators[4]["N"] += score;
  }

  for (let i=0; i<survey.length; i++) {
    if (choices[i] > 4) {
      t(survey[i][1], score[choices[i]-1])
    }
    if (choices[i] < 4) {
      t(survey[i][0], score[choices[i]-1])
    }
  }

  for (let i in indicators) {
    if (indicators[i][Object.keys(indicators[i])[0]] > indicators[i][Object.keys(indicators[i])[1]]) {
      answer += Object.keys(indicators[i])[0];
    }
    if (indicators[i][Object.keys(indicators[i])[0]] < indicators[i][Object.keys(indicators[i])[1]]) {
      answer += Object.keys(indicators[i])[1];
    }
    if (indicators[i][Object.keys(indicators[i])[0]] === indicators[i][Object.keys(indicators[i])[1]]) {
      answer += Object.keys(indicators[i])[0];
    }
  }

  return answer;
}