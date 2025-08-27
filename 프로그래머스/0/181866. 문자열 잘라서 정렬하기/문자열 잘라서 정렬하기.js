function solution(myString) {
    var answer = [];
    answer = myString.split("x").filter(s => s !== '')
    return answer.sort();
}