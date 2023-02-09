function solution(n) {
    var answer = 0;
    var number = Math.sqrt(n);
    if(Number.isInteger(number)) {
        answer = 1;
    } else {
        answer = 2;
    }

    return answer;
}