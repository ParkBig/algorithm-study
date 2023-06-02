let targetLen = 4
let props = [1,3,5,7]
let arr = [];
let cases = [];

function dfs(depth = 0) {
  if(depth === targetLen) {
      cases.push([...arr])
      return
  }
  for(let i = 0 ; i < props.length ; i++) {
      arr[depth] = props[i]
      dfs(depth+1)
  }
}
dfs()