// 해당 인덱스가 아니라 다음값(즉 사실상 개수)을 뱉으므로 해당인덱스 얻고싶으면 -1
const 하한선 = (arr, target, start, end) => {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }

  return end;
};

// 해당 인덱스가 아니라 다음값(즉 사실상 개수)을 뱉으므로 해당인덱스 얻고싶으면 -1
const 상한선 = (arr, target, start, end) => {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }

  return end;
};

//상한선, 하한선 이용한 특정 값들 개수 출력

const countByRange = (arr, leftValue, rightValue) => {
  const leftIndex = 하한선(arr, leftValue, 0, arr.length);
  const rightIndex = 하한선(arr, rightValue, 0, arr.length);

  return rightIndex - leftIndex;
};

// 이진탐색 관련
