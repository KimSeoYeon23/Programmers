function solution(array) {
    var answer = 0;
    var index = Math.floor(array.length / 2);
    answer = array.sort((a, b) => a - b)[index];
    return answer;
}