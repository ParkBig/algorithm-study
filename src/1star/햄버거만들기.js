function 햄버거만들기(ingredient) {
  let answer = 0;
  const arr = [];

  for (let i = 0; i < ingredient.length; i++) {
    const len = arr.push(ingredient[i]);
    if (len >= 4) {
      if (
        arr[len - 4] === 1 &&
        arr[len - 3] === 2 &&
        arr[len - 2] === 3 &&
        arr[len - 1] === 1
      ) {
        arr.pop();
        arr.pop();
        arr.pop();
        arr.pop();

        answer++;
      }
    }
  }

  return answer;
}

// my
function 햄버거만들기(ingredient) {
  var answer = 0;

  ingredient = ingredient.join("")

  while (ingredient.length>3) {
    let has = ingredient.indexOf("1231");
    if (has !== -1) {
      let left = ingredient.slice(0,has);
      let right = ingredient.slice(has+4);
      ingredient = left + right;
      answer++
    } else {
      break;
    }
  }
  return answer;
}