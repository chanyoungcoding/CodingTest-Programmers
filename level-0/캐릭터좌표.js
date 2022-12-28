/*

캐릭터 좌표

문자열 배열 keyinput , 정수형 배열 board 가 매개변수로 주어질 때
맵 크기 return

keyinput = ["rigth", "left", "up", "down" ....]
board = [7, 9]

rigth -> [1,0] left -> [-1,0] up -> [0,1] down -> [0,-1]
board 좌표는 [7,9] 라면 x 축이 7 y 축이 9 가 최대

*/

function solution(keyinput, board) {
    let answer = [0, 0]

    let boardX = (board[0] - 1) / 2
    let boardY = (board[1] - 1) / 2
    
    keyinput.map(x => {
        switch (x) {
            case "up":
                if (answer[1] !== boardY) answer[1]++
                break;
            
            case "down":
                if (answer[1] !== -boardY) answer[1]--
                break;
            
            case "rigth":
                if (answer[0] !== boardX) answer[0]++
                break;
            case "left":
                if (answer[0] !== -boardX) answer[0]--
                break;
        }
    })

    return answer
}