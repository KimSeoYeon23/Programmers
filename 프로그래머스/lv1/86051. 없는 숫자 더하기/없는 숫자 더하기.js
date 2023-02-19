function solution(numbers) {
    var answer = -1;
    
    return 45 - numbers.reduce((acc, cur) => acc + cur);
}