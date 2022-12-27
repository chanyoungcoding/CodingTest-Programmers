/*

n의 배수 고르기

정수 n, 정수배열 numlist 가 매개변수로 주어질 때
numlist 에서 n의 배수가 아닌 수들을 제거한 배열을 return

*/

function solution(n, numlist) {
    let answer = numlist.filter(x => x % n === 0)
    return answer
}