function solution(array, height) {
    var answer = 0;
    var count = 0;
    array.map((arr) => {
        if(arr > height) {
            count++;
            answer = count;
        }
    })
    return answer;
}