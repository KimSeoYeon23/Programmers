function solution(intStrs, k, s, l) {
    var answer = [];
    
    for (let i = 0; i < intStrs.length; i++) {
        const num = Number(intStrs[i].substr(s, l))
        if (num > k) {
            answer.push(num)
        }
    }
    return answer;
}