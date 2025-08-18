function solution(my_string, m, c) {
    var answer = '';
    
    // c-1번째 열의 문자들을 직접 추출
    for (let i = c - 1; i < my_string.length; i += m) {
        answer += my_string[i];
    }
    
    return answer;
}