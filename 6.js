//문자열 정렬하기

function solution(my_string) {
    let answer = [...my_string.toLowerCase()]
    return answer.sort().join('')
}

console.log(solution("Bcad"))
console.log(solution('HeLLo'))
