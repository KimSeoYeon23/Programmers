function solution(left, right) {
    var answer = 0;
    let leftCnt = [];
    let rightCnt = [];
    for(let i=left; i<=right; i++) {
        if(Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}