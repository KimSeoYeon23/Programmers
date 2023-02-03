function solution(strlist) {
    var answer = [];
    strlist.map(function (a) {
        answer.push(a.length);
    });
    return answer;
}