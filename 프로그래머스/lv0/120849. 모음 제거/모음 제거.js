function solution(my_string) {
    var answer = '';
    var regex = /[aeiou]/;
    my_string.split('').map((str) => {
        answer += str.replace(regex, '');
    }).join('');
    return answer;
}