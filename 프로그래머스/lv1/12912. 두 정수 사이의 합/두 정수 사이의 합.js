function solution(a, b) {
    var answer = 0;
    if(a >= b) {
        for(var i=b; i<=a; i++) {
            answer += i;
        }   
    } else {
        for(var j=a; j<=b; j++) {
            answer += j
        }
    }
    
    return answer;
}