/* 

가위바위보

가위 = 2 바위 = 0 보 = 5 일때 
문자열 rsp 가 매개변수로 주어질 때 rsp 를 모두 이기는 경우를 return

*/


function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };

    let answer = [...rsp].map(x => arr[x]).join('')
}


function solution1(rsp) {
    let answer = [...rsp].map(x => x === "2" ? "0" : x === "0" ? "5" : "2")
    return answer.join('')
}
