function solution(arr) {
    var answer = [];
    for(var i=0; i<arr.length; i++) {
        if(Math.min(...arr) !== arr[i]) {
            answer.push(arr[i]);
        }
        if(answer.length === 0) {
            answer.push(-1)
        }
    }
    return answer;
}