function solution(my_string, s, e) {
    var answer = '';
    const sliceString = my_string.slice(s, e+1).split('').reverse().join('')
    answer = my_string.slice(0, s) + sliceString + my_string.slice(e+1)
    
    return answer;
}