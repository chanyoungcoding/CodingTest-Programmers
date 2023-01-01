/*

영어 점수와 수학점수를 담은 2차원 배열 score 이 매개변수로 주어질 때
영어점수와 수학점수의 평균을 기준으로 매긴 등수를 담은 배열 return 

score = [[80,90], [40,50]] -> [1,2]

*/

function solution(score) {
    const arr = score.map(x => x[0] + x[1]).sort((a, b) => b - a)
    const answer = score.map(x => arr.indexOf(x[0] + x[1]) + 1)
    
    return answer
}

