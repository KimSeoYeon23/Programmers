function solution(start_num, end_num) {
    var answer = [];
    for (let i = start_num; i >= end_num; i--)  {
        if (i >= end_num)
        answer.push(i)
    }
    return answer;
}