function solution(numbers) {
    var answer = 0;
    var tmp = 0;
    for(var i = 0; i<numbers.length; i++) {
        tmp += numbers[i];
        answer = tmp / numbers.length;
    }
    
    return answer;
}