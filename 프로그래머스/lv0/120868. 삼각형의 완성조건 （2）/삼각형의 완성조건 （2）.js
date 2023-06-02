function solution(sides) {
    let a = sides[0];
    let b = sides[1];
    let min = Math.max(0, Math.abs(a - b) + 1);
    let max = a + b - 1;
    return max - min + 1;
}