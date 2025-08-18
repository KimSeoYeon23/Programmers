function solution(my_string) {
    var answer = [];
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    for (let i = 0; i < alphabets.length; i++) {
        const count = my_string.split(alphabets[i]).length - 1;
        answer.push(count);
    }
    
    return answer;
}