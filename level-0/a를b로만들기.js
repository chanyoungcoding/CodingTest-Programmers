/*

A를 B 로 만들기
문자열 before, after 이 매개변수로 주어질 때
before 의 순서를 바꿔 after 을 만들 수 있다면 1 아니면 2 return

*/

function solution(before, after) {
    return [...before].sort().join('') === [...after].sort().join('') ? 1 : 2
}