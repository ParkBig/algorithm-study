const sol = (listHead) => {

  let current = listHead
  let prev = null;

  while (current !== null) {
    if (current.data % 2 === 0) {
      if (prev === null) {
        listHead = current.next
      } else {
        prev.next = current.next
      }
    } else {
      prev = current
    }

    current = current.next
  }

  
};
