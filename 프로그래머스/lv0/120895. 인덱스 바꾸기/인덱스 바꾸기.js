function solution(my_string, num1, num2) {
    var array = my_string.split('');
    
    let str1 = array[num1];
    let str2 = array[num2];

    array.splice(num1, 1, str2);
    array.splice(num2, 1, str1);
    
    return array.join('');
}