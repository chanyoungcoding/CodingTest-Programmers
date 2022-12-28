/*

중복된숫자의갯수

정수 배열 array 와 정수 n 이 매개변수로 주어질 때
array에 n 이 몇개있는지 return 

*/

function solution(array, n) {
    let answer = 0
    for (let a of array) {
        if(a === n) answer += 1
    }

    return answer
}

function solution(array, n) {
    let answer = 0
    array.map(x => {
        if(x === n) answer += 1
    })
    return answer
}