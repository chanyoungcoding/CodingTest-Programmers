//배열의 평균값

function solution(numbers) {
    return numbers.reduce((prev,cur) => prev + cur) / numbers.length;
}

