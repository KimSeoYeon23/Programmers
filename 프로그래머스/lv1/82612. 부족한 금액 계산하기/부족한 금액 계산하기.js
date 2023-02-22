function solution(price, money, count) {
    var answer = -1;
    let totalPrice = 0;
    for(let i=0; i<=count; i++) {
        totalPrice += i*price;
        answer = totalPrice - money;
    }

    return Math.sign(answer) === -1 ? 0 : answer ;
}