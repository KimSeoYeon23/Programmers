function solution(n) {
    var answer = 0;
    var number = Math.sqrt(n);
    if(number % 1 === 0) {
        answer = Math.pow(number+1, 2);
    } else {
        answer = -1;
    }
    return answer;
}