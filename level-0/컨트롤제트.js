/*

컨트롤 제트

숫자와 "z" 로 이루어진 문자열 s 가 매개변수로 주어질 때
숫자를 차례대로 더하다가 z 가 나오면 그 전에 더한 수를 빼고 구한 값 return 

s = "1 z 3 4 z ..."

*/

function solution(s) {
    const stack = []

    for (let i of s) {
        if (i === 'z') {
            stack.pop()
        } else {
            stack.push(+i)
        }
    }

    const answer = stack.reduce((a,b) => a + b, 0)
    
    return answer
}

