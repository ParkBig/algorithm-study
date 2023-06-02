// 11줄 안쓰는경우고려해서 +1 해준거임.
function solution(clothes) {
  let ob = {};
  let mul = 1;
  
  for (let i of clothes) {
    ob[i[1]] ? ob[i[1]].push(i[0]) : ob[i[1]] = [i[0]];
  }
  
  for (let i of Object.keys(ob)) {
    mul *= (ob[i].length +1);
  }
  
  return mul - 1;
}


