/*

중복된 문자 제거

문자열 my_string 이 매개변수로 주어질 때
중복된 문자열을 제거하고 하나만 남기는 문자열 return

*/

function solution(my_string) {
    return [...new Set(my_string)].join('')
}

