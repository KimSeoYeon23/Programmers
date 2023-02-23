function solution(s) {
    var answer = '';
    let nums = s.split(' ');

    return Math.min(...nums) + ' ' + Math.max(...nums);
}