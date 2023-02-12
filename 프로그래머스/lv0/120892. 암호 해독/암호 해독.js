function solution(cipher, code) {
    var answer = '';
    [...cipher].filter((a, i) =>{
        if((i + 1) % code === 0) {
            answer += a;
        }
    }).join('');
    
    return answer;
}