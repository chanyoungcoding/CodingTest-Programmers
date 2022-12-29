/*

외계어 사전

알파벳이 담긴 배열 spell
외계어 사전이 담긴 배열 dic

spell 에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic 에 존재하면
1을 아니면 2를 return

*/

function solution(spell, dic) {
    return dic.filter(v => spell.every(x => v.includes(x))).length ? 1 : 2
}

