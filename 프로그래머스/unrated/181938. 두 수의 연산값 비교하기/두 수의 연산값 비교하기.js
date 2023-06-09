function solution(a, b) {
    let sum = a.toString() + b.toString();
    let multiply = 2 * a * b;
    return Math.max(Number(sum), multiply)
}