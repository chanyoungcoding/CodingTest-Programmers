/*

연속된 수의 합

정수 num 과 total 이 매개변수로 주어질 때
연속된 수 num 개를 더한 값이 total 이 될때
정수 배열을 오름차순으로 return

*/

function solution(num, total) {
    let answer = []
    let number = []
    
    for (let i = 1; i <= num; i++) {
        number.push(i)
    }

    let a = number.reduce((a, b) => a + b, 0)
    const share = (total - a) / num
    for (let i of number) {
        answer.push(share + i)
    }

    return answer
}