/*

문자열 계산하기

문자열 my_string 이 매개변수로 주어질 때
"3+5" => 7 이 나오도록 수식을 완성해서 return 

*/

function solution(my_string) {
    return eval(my_string)
}

function solution(my_string) {
    let arr = my_string.match(/\[0-9]+/g)
    let s = my_string.match(/\[+,-]/g)

    let answer = +arr[0]
    for (let i = 0; i < my_string.legth; i++) {
        if (s[i] === "+") {
            answer = answer + (arr[i+1])
        } else {
            answer = answer - (arr[i+1])
        }
    }

    return answer
}