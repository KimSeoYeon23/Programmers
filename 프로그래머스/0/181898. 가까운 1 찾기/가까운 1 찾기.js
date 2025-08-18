function solution(arr, idx) {
    var answer = 0;
    answer = arr.findIndex((num, i) => {
        return num === 1 && i >= idx
    })
    return answer;
}