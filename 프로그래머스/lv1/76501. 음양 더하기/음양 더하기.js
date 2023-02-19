function solution(absolutes, signs) {
    var answer = 0;
    var num = 0;
    absolutes.map((ab, i) => {
        if(signs[i] === false) {
            ab *= -1;
        }
        return answer += ab
    })
    return answer;
}