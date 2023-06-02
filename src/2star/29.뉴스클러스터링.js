// 문제설명이 부족. 0/0인경우 1로 취급하라는 말이없음 ㅡㅡ
function solution(str1, str2) {
  let str1Map = new Map();
  let str2Map = new Map();
  let union = 0;
  str1Map.set("size", {count:0})
  str2Map.set("size", {count:0})

  for (let i = 1; i < str1.length; i++) {
    let str = (str1[i - 1] + str1[i]).toLowerCase().replace(/[^a-z]/g, "");
    if (str && str.length === 2) {
      str1Map.get(str) ? str1Map.get(str).count++ : str1Map.set(str, { count: 1 });
      str1Map.get("size").count++;
    }
  }
  for (let i = 1; i < str2.length; i++) {
    let str = (str2[i - 1] + str2[i]).toLowerCase().replace(/[^a-z]/g, "");
    if (str && str.length === 2) {
      str2Map.get(str) ? str2Map.get(str).count++ : str2Map.set(str, { count: 1 });
      str2Map.get("size").count++;
    }
  }

  let findSmall = (str1Map.size - str2Map.size) > 0 ? str2Map.keys() : str1Map.keys();
  for (let i of findSmall) {
    if (str1Map.get(i) && str2Map.get(i) && i !== "size") {
      union += Math.min(str1Map.get(i).count, str2Map.get(i).count);
    }
  }

  return (union === 0 && str1Map.get("size").count + str2Map.get("size").count - union === 0) ? 65536 : (Math.floor(union / (str1Map.get("size").count + str2Map.get("size").count - union) * 65536))
}