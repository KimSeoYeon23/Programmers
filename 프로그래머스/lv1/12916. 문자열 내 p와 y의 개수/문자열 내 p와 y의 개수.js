function solution(s){
    var answer = true;
    let change = s.toLowerCase();
    let check_p = change.split('p').length;
    let check_y = change.split('y').length;
    
    if(check_p === check_y) {
        answer = true;
    } else {
        answer = false;
    }

    

    return answer;
}