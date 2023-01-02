/*

7의 개수

정수 배열 array 가 매개변수로 주어질 때
7이 총 몇개 있는지 return 

*/

function solution(array) {
    let answer = 0
    let num = array.join('').split('')

    for (let i of num) {
        if (i === "7") answer += 1
    }
    return answer
}

