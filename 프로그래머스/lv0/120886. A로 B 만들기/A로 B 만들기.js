function solution(before, after) {
    var answer = 0;
    var strB = before.split('').sort().join('');
    var strA = after.split('').sort().join('');
    
    if(strB === strA) {
        answer = 1;
    }
    
    return answer;
}