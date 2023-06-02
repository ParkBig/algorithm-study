function bfs(graph, startNode, targetNode) {
  const visited = new Set(); 
  const queue = [{ node: startNode, distance: 1 }]; 
  visited.add(startNode); 

  while (queue.length > 0) {
    const { node, distance } = queue.shift(); 
    if (node === targetNode) { 
      return distance;
    }

    const neighbors = graph.get(node); 
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) { 
        visited.add(neighbor); 
        queue.push({ node: neighbor, distance: distance + 1 }); 
      }
    }
  }
  
  return -1; 
}
