function solution(numbers) {
    var answer = 0;
    var n = numbers.length;
    numbers.sort((a, b) => a - b);
    answer = Math.max(numbers[n - 1] * numbers[n - 2], numbers[0] * numbers[1])
    
    return answer;
}