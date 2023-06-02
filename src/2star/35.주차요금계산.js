const 주차요금계산 = (fees, records) => {
  let info = {}
  let ans = []
  
  const calMin = (start,end = "23:59") => {
    let splitStart = start.split(":");
    let splitEnd = end.split(":");
    
    const minStart = Number(splitStart[0])*60 +Number(splitStart[1]);
    const minEnd = Number(splitEnd[0])*60 +Number(splitEnd[1]);
    
    return minEnd - minStart;
  }
  
  const calFee = (min) => {
    let feeMin = min - fees[0]
    let fee = fees[1]
    if (feeMin > 0) {
      fee = fee + Math.ceil(feeMin/fees[2])*fees[3]
    }
    
    return fee
  }
  
  for (let i of records) {
    let splitInfo = i.split(" ");
    if (splitInfo[2] === "IN")  {
      info[splitInfo[1]] = info[splitInfo[1]] ? {...info[splitInfo[1]], in: splitInfo[0]} : { in: splitInfo[0]}
    }
    if (splitInfo[2] === "OUT") {
      info[splitInfo[1]].accumulate = info[splitInfo[1]].accumulate ? info[splitInfo[1]].accumulate + calMin(info[splitInfo[1]].in, splitInfo[0]) : calMin(info[splitInfo[1]].in, splitInfo[0])
      info[splitInfo[1]].in = null
    }
  }
  
  for (let i in info) {
    if (info[i].in) {
      info[i].accumulate = info[i].accumulate ? info[i].accumulate + calMin(info[i].in) : calMin(info[i].in)
    }
  }
  
  for (let i in info) {
    ans.push([i, calFee(info[i].accumulate)])
  }
  
  ans.sort((a,b) => a[0]-b[0])
  
  return ans.map(prop => prop[1])
}

주차요금계산([180, 5000, 10, 600],["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"])
