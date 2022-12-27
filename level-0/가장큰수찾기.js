/*

가장 큰수찾기

정수 배열 Array 가 매개변수로 주어질 때
가장큰수와 그수의 index 값을 return 

*/

function solution(Array) {
    let num = Math.max(...Array)
    let index = Array.indexOf(num)
    return [num, index]
}