/*

k의 개수

1부터 13까지의 수에서, 1은 1,10,11,12,13 이렇게 총 6번 등장합니다.
정수 i,j,k 가 매개변수로 주어질 때, i 부터 j 까지 k 가 몇 번 등장하는지 return 

*/

function solution(i, j, k) {
    let a = ""
    for (i; i <= j; i++) {
        a += i
    };

    return a.split(k).length - 1
}