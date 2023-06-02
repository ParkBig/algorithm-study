function 바탕화면정리(wallpaper) {
  let [top, right, bottom, left] = [null, null, null, null];

  for (let i = 0; i < wallpaper.length; i++) {
    if (wallpaper[i].includes("#")) {
      top = i;
      break;
    }
  }
  for (let i = wallpaper.length; i > 0; i--) {
    if (wallpaper[i - 1].includes("#")) {
      bottom = i;
      break;
    }
  }
  for (let i = 0; i < wallpaper.length; i++) {
    let leftCoor = wallpaper[i].indexOf("#");
    if (leftCoor !== -1) {
      if (left === null) {
        left = leftCoor
      }
      if (left > leftCoor) {
        left = leftCoor;
      }
    }
  }
  for (let i = 0; i < wallpaper.length; i++) {
    let rightCoor = wallpaper[i].lastIndexOf("#");
    if (rightCoor !== -1) {
      if (right === null) {
        right = rightCoor + 1;
      }
      if (right < rightCoor + 1) {
        right = rightCoor + 1;
      }
    }
  }

  return [top, left, bottom, right];
}
