function solution(n) {
    var answer = [];
    var string = n.toString();
    var number = string.split('').reverse();
    for(var i=0; i<number.length; i++) {
        answer.push(Number(number[i]))   
    }

    return answer;
}