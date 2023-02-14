function solution(box, n) {
    var answer = 1;
    box.map((bx) => {
        var dice = Math.floor(bx / n);
        answer *= dice;
    })
    return answer;
}