//양꼬치

function solution(n,k) {
    let service = Math.floor(n / 10);
    return n * 12000 + (k - service) * 2000
}

console.log(solution(10,3))