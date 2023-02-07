function solution(sides) {
    var answer = 0;
    var newArray = sides.sort((a,b) => a - b);
    if(newArray[2] >= newArray[0] + newArray[1]) {
        answer = 2;
    } else {
        answer = 1;
    }
    return answer;
}