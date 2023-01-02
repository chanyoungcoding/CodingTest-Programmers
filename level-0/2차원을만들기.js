/*

2차원을 만들기

정수 배열 num_list 와 정수 n이 매개변수로 주어질 때
num_list 를 n 개로 쪼갠 리스트 return

*/

function solution(num_list, n) {
    let answer = []
    for (let i = 0; i < num_list.legth; i += n) {
        answer.push(num_list.slice(i, i+n))
    }
    return answer
}