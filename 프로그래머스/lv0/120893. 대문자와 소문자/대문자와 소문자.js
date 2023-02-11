function solution(my_string) {
    var answer = '';
    var array = my_string.split('');
    array.map((arr) => {
        if(arr == arr.toUpperCase()) {
            answer += arr.toLowerCase();
        } else {
            answer += arr.toUpperCase();
        }
    })
    
    
    return answer;
}