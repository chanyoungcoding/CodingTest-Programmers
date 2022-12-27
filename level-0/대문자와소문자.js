/*

대문자와 소문자

문자열 my_string이 매개변수로 주어질 때
대문자 <--> 소문자로 바꾼 문자열을 return

*/

function solution(my_string) {
    let answer = [...my_string].map(x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase())
    return answer
}

