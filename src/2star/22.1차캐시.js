function one차캐시(cacheSize, cities) {
  let cache = []
  let time = 0;
  cities = cities.map(prop => prop.toLowerCase())

  for (let i of cities) {
    let isHas = cache.includes(i);
    if (cacheSize === 0) {
      time += 5;
    } else {
      if (!isHas) {
        if (cache.length<cacheSize) {
          cache.push(i);
        } else {
          cache.shift();
          cache.push(i);
        }
        time+=5;
      }
      if (isHas) {
        cache = cache.filter(prop => prop !== i);
        cache.push(i);
        time++;
      }
    }
  }
  
  return time
}