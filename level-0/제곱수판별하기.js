/*

제곱수판별하기

정수 n 이 매개변수로 주어질 때
n이 제곱수면 1을 아니면 2을 return

*/

function solution(n) {
    let number = Number.isInteger(Math.sqrt(n))
    let answer = number === true ? 1 : 2
    return answer
}

function solution(n) {
    let answer = Number.isInteger(Math.sqrt(n)) ? 1: 2
}

