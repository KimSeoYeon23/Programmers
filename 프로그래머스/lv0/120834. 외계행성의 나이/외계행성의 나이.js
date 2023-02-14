function solution(age) {
    var answer = '';
    var array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    var string = age.toString();
    for(var i=0; i<string.length; i++) {
        answer += array[parseInt(string[i])];
    }
    return answer;
}