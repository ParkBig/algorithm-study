function 신고결과받기(id_list, report, k) {
  let answer = new Array(id_list.length).fill(0);
  let reportedList = {};
  
  report = [...new Set(report)];

  for (let i of id_list) {
    reportedList[i] = {
      reported: 0,
      report: []
    };
  }

  for (let i of report) {
    const reporter = i.split(" ")[0];
    const reported = i.split(" ")[1];
    reportedList[reported].reported++;
    reportedList[reporter].report.push(reported);
  }

  for (let i=0; i<id_list.length; i++) {
    const target = reportedList[id_list[i]];
    for (let j of target.report) {
      if (reportedList[j].reported >= k) {
        answer[i]++;
      }
    }
  }

  return answer;
}