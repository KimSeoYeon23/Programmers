function solution(my_string) {
    var answer = 0;
    let array = my_string.split(' ');
    let operator = '+';
    for(let i=0; i<my_string.length; i++) {
        if(isNaN(array[i])) {
            operator = array[i]
        } else {
            if(operator === '+'){
                answer += Number(array[i])
            } else {
                answer -= Number(array[i])
            }
        }
        
    }
    return answer;
}