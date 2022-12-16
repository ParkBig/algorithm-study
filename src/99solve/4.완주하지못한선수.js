// 내가 푼것
function solution(participant, completion) {
    participant.sort();
    completion.sort();
    console.log(participant,completion)
    for (let i in participant) {
        if (completion[i] !== participant[i]) {
            return participant[i]
        }
    }
}

// console.log(solution(["mislav", "stanko", "mislav", "ana", "xmen"],["stanko", "ana", "mislav", "xmen"]))
// console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"],["josipa", "filipa", "marina", "nikola"]))
