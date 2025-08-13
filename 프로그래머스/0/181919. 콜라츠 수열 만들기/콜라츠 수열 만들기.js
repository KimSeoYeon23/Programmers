function solution(n) {
    var answer = [];
    let count = n

    answer.push(n)
    while (count !== 1) {
        if (count % 2 === 0) {
            count = count / 2
            answer.push(count)
        } else {
            count = 3 * count + 1
            answer.push(count)
        }
    }
    
    return answer;
}