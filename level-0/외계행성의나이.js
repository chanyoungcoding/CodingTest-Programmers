/*

외계행성의 나이

정수인 age 가 매개변수로 주어질 때
a ~ j = 0 ~ 9 가 외계행성의 나이를 구하는 방식일 때 
외계행성나이인 알파벳으로 문자열 return

*/

function solution(age) {
    let a = Array.from(age.toString())
    let 외계행성의나이 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
    let answer = a.map(x => 외계행성의나이[x])
    return answer.join('')
}


function solution(age) {
    let a = [...age.toString()]
    let answer = a.map(x => "abcdefghij"[x]).join('')
    return answer
}

