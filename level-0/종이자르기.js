/*

종이 자르기

정수 M,N 이 매개변수로 주어질 때
M * N 크기의 종이를 최소로 가위질 하여 1 * 1 크기의 종이로 나오는 가위질 횟수 return 

*/

function solution(M, N) {
    return (M-1) + ((N-1) * M)
}