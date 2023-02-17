function solution(phone_number) {
    var answer = '';
    var arr = phone_number.split('').reverse();
    for(var i = 0; i < arr.length; i++) {
        if(i < 4) {
            answer += arr[i];
        }
        if(i > 3) {
            answer += '*';
        }
    }
    return answer.split('').reverse().join('');
}