/*

문자열정렬하기

문자열 my_string 이 매개변수로 주어질 때
my_string 안에 있는 숫자만 오름차순으로 정렬한 리스트 return

*/

function solution(my_string) {
    let a = my_string.match(/\d/g).sort((a, b) => a - b)
    let answer = a.map(x => parseInt(x, 10))
    return answer
}

function solution(my_string) {
    let a = [...my_string].map(x => !isNaN(x))
    let answer = a.map(x => parseInt(x, 10))
    return answer
}