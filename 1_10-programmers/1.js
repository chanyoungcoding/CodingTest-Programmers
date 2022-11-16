//7의 개수

function solution(array) {
    let answer = 0
    let a = Array.from(array.join(''))
    for(let i of a) {
        if(i === '7') {
            answer += 1
        }
    }
    return answer
}

//다른 풀이

function solution(array) {
    return array.join('')
}

console.log(solution([7,77,7]))
