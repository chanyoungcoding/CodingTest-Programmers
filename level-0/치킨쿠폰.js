/*

치킨 쿠폰

치킨을 시키면 쿠폰을 1장 주는데 쿠폰을 열장 모으면 치킨 1마리가 공짜이고
공짜 치킨을 시켯을때도 쿠폰을 1장 줄 때
최대 서비스 치킨의 수를 return 

매개변수 = chicken
*/

function solution(chicken) {
    const order = coupons => {
        if(coupons < 10) return 0
        const service = Math.floor(chicken / 10)
        return service + order(service + (coupons % 10))
    }
    return order(chicken)
}

