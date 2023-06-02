// 못품, 나는 작은애들끼리 욱여널 생각 했는데
// 그게아니라 젤 무거운놈 가벼운놈이 같이 탈때 구명보트수가 가장 적음.

function 구명보트(people, limit){
	var answer = 0
    people.sort((a,b) => b-a)
    let l = 0
    let r = people.length-1
    
    while(l<r){
    	var sum = people[l] + people[r]
        if(sum>limit){
        	l++
        } else {
        	l++
            r--
        }
        answer++
    }
    if(l == r) answer++
    return answer
}