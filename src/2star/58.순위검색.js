const 하한선 = (arr, target, start, end) => {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }

  return end;
};

const getInfos = (info) => {
  const infos = {}; 
  info.forEach(infoString => {
    const arr = infoString.split(" ");
    const score = parseInt(arr.pop());
    const key = arr.join("");
    if (infos[key]) infos[key].push(score)
    else infos[key] = [score];
  });
  for (const key in infos) {
    infos[key].sort((a, b) => a - b); 
  }
  return infos;
}

const getResult = (infos, query, score) => { 
  const infosKey = Object.keys(infos);
  return infosKey
    .filter(key => query.every(v => key.includes(v)))
    .reduce((acc, key) => acc + infos[key].length - 하한선(infos[key], score, 0, infos[key].length), 0);
}

const solution = (info, query) => {
  let answer = [];
  const infos = getInfos(info); // solution
  query
    .map(q => q
       .split(/ and | |-/i)
       .filter(v => v !== "")
    )
    .forEach(query => {
      const score = query.pop();
      const result = getResult(infos, query, score);
      answer.push(result) 
    })
  
  return answer;
}
