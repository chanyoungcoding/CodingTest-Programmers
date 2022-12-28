/*

진료 순서 정하기

정수 배열 emergency 가 매개변수로 주어질 때
응급도가 높은 순으로 진료 순서를 정한 배열 return

*/

function solution(emergency) {
    const number = [...emergency]
    number.sort((a, b) => b - a)
    
    const answer = emergency.map(x => number.indexOf(x) + 1)
    return answer
}

