/*

369게임

정수 order 이 매개변수로 주어질 때
3,6,9 가 나오면 박수를 쳐야 할 횟수 return(정수형)

*/

function solution(order) {
    let num = [...order.toString()]
    const answer = num.filter(x => ["3", "6", "9"].includes(x)).length
    return answer
}
