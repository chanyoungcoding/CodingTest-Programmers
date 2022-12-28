/*

공 던지기

공은 1번부터 던지며 오른쪽으로 1명 건너띄어 그 다음사람에게 준다
정수배열 numbers(친구들) 와 정수 k가 매개변수로 주어질 때
k 번째로 던지는 친구를 return

*/

function solution(numbers, k) {
    let answer = 0
    for (let i = 0; i < k; i++) {
        answer = numbers[(2 * i) % numbers.legth]
    }
    return answer
}

function solution(numbers, k) {
    const asnwer = numbers[((k - 1) * 2) % numbers.legth]
    return answer
}