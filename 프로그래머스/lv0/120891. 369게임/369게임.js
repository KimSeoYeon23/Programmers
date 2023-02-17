function solution(order) {
    var answer = 0;
    answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
    return answer;
}