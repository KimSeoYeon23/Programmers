function solution(n) {
    var answer = 0;
    for(var i=0; i<=n; i++) {
        if(n%i === 1) {
            return answer = i;
        }
    }
    return answer;
}