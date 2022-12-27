/*

숫자 찾기

정수 num, k 가 매개변수로 주어질 때
num에서 숫자 k 가 있으면 
그 숫자의 자리수인 정수 return 없으면 -1

*/

function solution(num, k) {
    let a = [...num.toString()]
    let index = a.indexOf(k.toString())
    return index === -1 ? index : index + 1
}

