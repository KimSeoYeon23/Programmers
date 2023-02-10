function solution(my_string) {
    var answer = 0;
    var regex = /[^0-9]/g;
    var result = my_string.replace(regex, '');
    var number = parseInt(result);
    var array = Array.from(result);
    
    for(var i = 0; i < array.length; i++) {
        answer += parseInt(array[i]);
    }

    return answer;
}