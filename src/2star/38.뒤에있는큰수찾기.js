function solution(numbers) {
  var answer = [];

  for (let i=0; i<numbers.length; i++) {
    let target = numbers[i];
    for (let j=i+1; j<numbers.length; j++) {
      if (numbers[j]>target) {
        answer.push(numbers[j]);
        break;
      }
    }
    answer[i] ?? answer.push(-1);
  }

  console.log(answer)

  return answer;
}

function solution2(numbers) {
const stack = [];
const answer = [];

for (let i = numbers.length - 1; i >= 0; i--) {
  while (stack.length && stack[stack.length - 1] <= numbers[i]) {
    stack.pop();
  }
  answer[i] = stack.length ? stack[stack.length - 1] : -1;
  stack.push(numbers[i]);
}

return answer;
}