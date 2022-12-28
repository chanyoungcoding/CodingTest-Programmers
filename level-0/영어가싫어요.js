/*

영어가 싫어요

문자열("onetwozero..") numbers 가 매개변수로 주어질 때
그 문자열을 숫자로 return(정수형)

*/

function solution(numbers) {
    const number = ['zero', 'one', 'two']
    for (let i = 0; i < 10; i++) {
        numbers = numbers.replaceAll(number[i],i)
    }
    return +numbers
}



