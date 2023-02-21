function solution(array) {
    var answer = 0;
    var newArr = array.join('').split('')
    for(var i=0; i<newArr.length; i++) {
        if(newArr[i] === '7') {
            answer++;
        } else {
            answer;
        }
    }
            console.log(answer)
    return answer;
}  