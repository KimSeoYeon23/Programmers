function solution(s) {
    var answer = '';
    var regex = /[A-Z]/g;
    return s.split('').sort().reverse().join('');
}