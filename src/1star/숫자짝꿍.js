function 숫자짝꿍(X, Y) {
  const hashX = new Map();
  const hashY = new Map();

  for (const digit of X) {
    hashX.set(digit, (hashX.get(digit) || 0) + 1);
  }
  for (const digit of Y) {
    hashY.set(digit, (hashY.get(digit) || 0) + 1);
  }

  let answer = '';
  
  for (let i = 9; i >= 0; i--) {
    const char = String(i);
    const count = Math.min(hashX.get(char), hashY.get(char));
    answer += char.repeat(count);
  }

  return answer ? (Number(answer) ? answer : '0') : '-1';
}


// 다시볼 문제