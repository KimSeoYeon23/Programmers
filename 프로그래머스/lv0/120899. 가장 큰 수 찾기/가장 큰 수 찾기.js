function solution(array) {
    var answer = [];
    for(var i=0; i<array.length; i++) {
        if(array[i] === Math.max(...array)) {
            answer.push(array[i], i)
        }
    }

    return answer;
}