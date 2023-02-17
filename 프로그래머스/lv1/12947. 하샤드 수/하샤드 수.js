function solution(x) {
    var answer = true;
    var arr = String(x).split('');
    var sum = 0;
    for(var i=0; i<arr.length; i++) {
        sum += Number(arr[i]);
        if(x % sum === 0) {
            answer = true;
        } else {
            answer = false;
        }
    }
    return answer;
}