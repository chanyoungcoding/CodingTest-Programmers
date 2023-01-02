/*

이진수인 문자열 매개변수 bin1, bin2 가 주어질 때
두 매개변수의 핪을 문자열로 return 

*/

function solution(bin1, bin2) {
    const sum = parseInt(bin1, 2) + parseInt(bin2, 2)
    return sum.toString(2)
}

