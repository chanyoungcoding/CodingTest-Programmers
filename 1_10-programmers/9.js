//제곱수 판별하기

function solution(n) {
    const sqrt = Math.sqrt(n)
    const answer = sqrt % 1 === 0 ? 1 : 2
    return answer
}

function solution(n) {
    const answer = Number.isInteger(Math.sqrt(n)) ? 1 : 2
    return answer
}