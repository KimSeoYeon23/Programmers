function solution(age) {
    var answer = '';
    var array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    var string = age.toString();
    var strArr = string.split('');
    for(var i=0; i<string.length; i++) {
        answer += array[parseInt(strArr[i])];
    }
    return answer;
}