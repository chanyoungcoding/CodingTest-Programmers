/*

정수 n 이 매개변수로 주어질 때
n의 가장 큰 팩토리얼 return

*/

function solution(n) {
    let answer = 1
    let a = 0
    while (answer < n) {
        a++
        answer = answer * a
    }
    return a
}