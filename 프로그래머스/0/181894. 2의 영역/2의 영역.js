function solution(arr) {
    var answer = [];
    const first = arr.indexOf(2)
    const last = arr.lastIndexOf(2)
    answer = arr.slice(first, last+1).length ? arr.slice(first, last+1) : [-1]
    return answer;
}