//머쓱이보다 키 큰 사람

function solution(array, height) {
    let answer = array.filter(x => x > height).length
    return answer
}

console.log(solution([149,180,192,170], 167))

