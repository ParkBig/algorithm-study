// 첫풀이 다맞는데 시간복잡도 개선해야함
function 연속된부분수열의합(sequence, k) {
  let arr = [];
  let sum = 0;
  let end = 0;
  
  for (let start=0; start<sequence.length; start++) {
    if (sequence[start] > k) break;
    while (true) {
      sum+=sequence[end];
      
      if (sum >= k || end > sequence.length) {
       
        if (sum === k) {
          if (!arr.length) {
            arr[0] = start;
            arr[1] = end;
          } else {
            if (arr[1] - arr[0] > end - start) {
              arr[0] = start;
              arr[1] = end;
            }
          }
        }
        
        end = start+1;
        break;
      }
      end++;
    }
    sum = 0;
  }
  
  return arr
}

// 두번쨰 풀이
function 연속된부분수열의합(sequence, k) {
  let arr = [];
  let sum = 0;
  let end = 0;

  for (let start=0; start<sequence.length; start++) {
    while (sum < k && end < sequence.length) {
      sum+=sequence[end];
      end++;
    }

    if (sum === k) {
      if (!arr.length) {
        arr[0] = start;
        arr[1] = end-1;
      } else {
        if (arr[1] - arr[0] > (end-1) - start) {
          arr[0] = start;
          arr[1] = end-1;
        }
      }
    }

    sum -=sequence[start];
  }

  return arr
}
