/*

삼각형의 완성 조건

삼각형의 두변의 길이가 담긴 배열 sides 가 매개변수로 주어질 때
나머지 한변이 될 수 있는 정수의 개수 return

*/

function solution(sides) {
    return Math.min(...sides) * 2 - 1
}