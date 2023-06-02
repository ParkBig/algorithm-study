const toMinGap = (start, end) => {
  start = start.split(":");
  end = end.split(":");
  return +end[0] * 60 + +end[1] - (+start[0] * 60 + +start[1]);
};

const repeat = (time, scale) => {
  let scaleArr = [];
  for (let i = 0; i < scale.length; i++) {
    if (scale[i + 1] === "#") {
      scaleArr.push(scale[i] + scale[i + 1]);
    } else {
      if (scale[i] !== "#") {
        scaleArr.push(scale[i]);
      }
    }
  }
  let ans = "";
  for (let i = 0; i < time; i++) {
    ans += scaleArr[i % scaleArr.length];
  }
  return ans;
};

function solution(m, musicinfos) {
  let ans = [];
  for (let i=0; i<musicinfos.length; i++) {
    musicinfos[i] = musicinfos[i].split(",");
    let playtime = toMinGap(musicinfos[i][0], musicinfos[i][1])
    let repeatedScale = repeat(playtime, musicinfos[i][3]).replace(m+"#", "")
    if (
      repeatedScale.includes(m) &&
      repeatedScale[repeatedScale.indexOf(m) + m.length] !== "#"
    ) {
      ans.push([playtime, i, musicinfos[i][2]]);
    }
  }

  ans.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    } else {
      return b[0] - a[0]
    }
  });
  return ans.length ? ans[0][2] : "(None)";
}