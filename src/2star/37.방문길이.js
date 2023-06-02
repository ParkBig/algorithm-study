function 방문길이(dirs) {
  let character = [5,5];
  let record = {}
  let count = 0;
  
  const getDot = (nowCharacter,direction) => {
    let [x,y] = nowCharacter;
    
    if (direction === "U") {
      x = x-1
    }
    if (direction === "D") {
      x = x+1
    }
    if (direction === "L") {
      y = y-1
    }
    if (direction === "R") {
      y = y+1
    }
    
    if (x>-1 && x<11 && y>-1 && y<11) {
      return [x,y]
    }
    return nowCharacter
  }
  
  for (let i of dirs) {
    const moveTo = getDot(character,i)
    if (!record[`${character}`] || (record[`${character}`].length && !record[`${character}`].includes(`${moveTo}`)) && `${moveTo}` !== `${character}` ) {
      count++
    }
    record[`${character}`] = record[`${character}`] ? [...record[`${character}`], `${moveTo}`] : [`${moveTo}`]
    record[`${moveTo}`] = record[`${moveTo}`] ? [...record[`${moveTo}`], `${character}`] : [`${character}`]

    character = moveTo
  }
  
  return count
}