function solution(array) {
    var answer = 0;
    var index = Math.ceil(array.length / 2);
    answer = array.sort((a, b) => a-b)[index - 1];
    console.log(answer);
    return answer;
}