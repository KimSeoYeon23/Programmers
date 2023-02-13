function solution(n) {
    var answer = 0;
  	// 한 판에 여섯 조각
    let pizzaBox = 6
    // 같은 수로 나눠질 때까지 +6
    while(pizzaBox%n !== 0) {
        pizzaBox+=6
    } 
    return answer = pizzaBox / 6;
}