//한번만 등장한 문자

function solution(s) {
    let answer = []
    for(let a of s) {
        if(s.indexOf(a) === s.lastIndexOf(a)) {
            answer.push(a)
        }
    }
    return answer.sort().join('')
}

console.log(solution('abcabcabc'))