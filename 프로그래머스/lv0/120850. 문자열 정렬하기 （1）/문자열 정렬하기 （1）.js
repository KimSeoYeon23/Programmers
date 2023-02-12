function solution(my_string) {
    var answer = [];
    var regex = /[a-z]/g;
    var number = my_string.replace(regex, '');
    number.split('').map((num) => {
        answer.push(Number(num));
    })
    return answer.sort();
}