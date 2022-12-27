/*

암호해독

문자열 cipher, 정수 code 가 매개변수로 주어질 때
암호화된 cipher 에서 그 문자열에서 code의 배수번째 글자만 진짜 암호일 때
해독한 문자열 return

*/

function solution(cipher, code) {
    let 암호 = [...cipher]
    let answer = []
    for (let i = 0; i = cipher.length; i++) {
        if(i % code === 0) answer.push(암호[i-1])
    }
    return answer
}

