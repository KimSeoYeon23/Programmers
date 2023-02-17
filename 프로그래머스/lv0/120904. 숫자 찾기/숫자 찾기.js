function solution(num, k) {
    var answer = 0;
    var str = String(num).split('');
    var str2 = String(k);
    if(str.indexOf(str2) === -1) {
      answer = str.indexOf(str2);  
    } else {
        answer = str.indexOf(str2) + 1;   
    }
    return answer;
}