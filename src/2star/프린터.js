function 프린터(priorities, location) {
  let done = [];
  
  priorities = priorities.map((prop, index) => {return  {pri: prop, key: index}});
  let target = priorities[location];
  
  while (priorities.length) {
    let pri = priorities.shift();
    let isMorePri = priorities.findIndex(prop => prop.pri > pri.pri);
    isMorePri !== -1 ? priorities.push(pri) : done.push(pri);
  }
  
  return done.findIndex(prop => prop.key === target.key)+1
}