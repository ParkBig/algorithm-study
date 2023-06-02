function solution(park, routes) {
  let width = park[0].length;
  let height = park.length;
  let now = [];
  
  let newPark = park.join("");
  
  for (let i=0; i<newPark.length; i++) {
    if (newPark[i] === "S") {
      now[0] = Math.floor(i/width);
      now[1] = i%width;
      break;
    }
  }
  
  for (let i of routes) {
    let moveTo = i[0];
    let howMuch = Number(i[2]);
    let forNewParkStart = now[0]*width + now[1];
    let targetColumn = []
    
    for (let i=0; i< newPark.length; i++) {
      if (i%width === forNewParkStart%width) {
        targetColumn.push(newPark[i])
      }
    }
    
    if ((moveTo === "E") && (now[1] + howMuch < width)) {
      if (!park[now[0]].slice(now[1], (now[1]+howMuch+1)).includes("X")) {
        now[1] += howMuch;
      }
    }
    if ((moveTo === "W") && (now[1] - howMuch >= 0)) {
      if (!park[now[0]].slice(now[1]-(howMuch), now[1]).includes("X")) {
        now[1] -= howMuch;
      }
    }
    if ((moveTo === "S") && (now[0] + howMuch < height)) {
      if (!targetColumn.slice(now[0], (now[0]+howMuch+1)).includes("X")) {
        now[0] += howMuch;
      }
    }
    if ((moveTo === "N") && (now[0] - howMuch >= 0)) {
      if (!targetColumn.slice(now[0]-howMuch, now[0]).includes("X")) {
        now[0] -= howMuch;
      }
    }
  }
  
  return now
}

// ㅠㅠ 런타임에러 어디서 뜨는건가 했더만 인클루드 오타였음 ㅠㅠ 시간을 몇시간 버린건지
// 두번째 풀이
function 공원산책(park, routes) {
  let width = park[0].length;
  let height = park.length;
  let reversePark = [];
  let now = [];
  
  for (let i=0; i< width; i++) {
    let part = "";
    for (let j=0; j<height; j++) {
      part += park[j][i]
    }
    reversePark.push(part)
  }
  
  let newPark = park.join("");
  for (let i=0; i<newPark.length; i++) {
    if (newPark[i] === "S") {
      now[0] = Math.floor(i/width);
      now[1] = i%width;
      break;
    }
  }
 
  for (let i of routes) {
    let moveTo = i[0];
    let howMuch = Number(i[2]);
    
    if ((moveTo === "E") && (now[1] + howMuch < width)) {
      if (!park[now[0]].slice(now[1], (now[1]+howMuch+1)).includes("X")) {
        now[1] += howMuch;
      }
    }
    if ((moveTo === "W") && (now[1] - howMuch >= 0)) {
      if (!park[now[0]].slice(now[1]-(howMuch), now[1]).includes("X")) {
        now[1] -= howMuch;
      }
    }
    if ((moveTo === "S") && (now[0] + howMuch < height)) {
      if (!reversePark[now[1]].slice(now[0], (now[0]+howMuch+1)).includes("X")) {
        now[0] += howMuch;
      }
    }
    if ((moveTo === "N") && (now[0] - howMuch >= 0)) {
      if (!reversePark[now[1]].slice(now[0]-howMuch, now[0]).includes("X")) {
        now[0] -= howMuch;
      }
    }
  }
  
  return now
}

solution(["OSO","OOO","OXO","OOO"], ["E 2","S 3","W 1"])