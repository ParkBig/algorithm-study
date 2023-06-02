function 다리를지나는트럭(bridge_length, weight, truck_weights) {
  let bridgeStatus = { done: [], proceed: Array.from({length: bridge_length}, () => 0), spareWeight: weight, proceedLimit: bridge_length };
  let time = 0;
  
  while (true) {
    time++;
    const done = bridgeStatus.proceed.shift();
    bridgeStatus.spareWeight += done;
    let start = truck_weights[0];
    
    if (bridgeStatus.spareWeight - start >=0) {
      start = truck_weights.shift()
      bridgeStatus.proceed.push(start)
      bridgeStatus.spareWeight -= start
      if (truck_weights.length === 0) {
        time += bridgeStatus.proceedLimit
        break
      }
    } else {
      bridgeStatus.proceed.push(0)
    }
    
  }
  
  return time
}