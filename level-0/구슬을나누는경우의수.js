/*

구슬을 나누는 경우의 수

머쓱이가 갖고있는 구슬의 개수 balls
나누어줄 구슬의 개수 share
balls 중 share 개의 구슬을 고르는 가능한 모든 경우의 수 return

*/

function solution(balls, share) {
    const factorial = num => num === 0 ? 1 : num * factorial(num - 1)

    const answer = Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)))
    return answer
}