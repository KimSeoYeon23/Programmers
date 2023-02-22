function solution(numbers, k) {
    var answer = 0;
    k = (2 * (k - 1)) % numbers.length
    return numbers[k];
}