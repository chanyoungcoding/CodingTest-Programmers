/*

배열 회전시키기

정수가 담긴 배열 numbers, 문자열 direction 가 매개변수로 주어질 때
direction 방향에 따라 한칸씩 회전하는 배열을 return 

*/

function solution(numbers, direction) {
    let answer = [...numbers]
    if (direction === "right") {
        answer.unshift(answer.pop())
    } else if (direction === "left") {
        answer.push(answer.shift())
    }
    return answer
}

