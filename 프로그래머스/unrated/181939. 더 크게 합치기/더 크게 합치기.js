function solution(a, b) {
    let A = a.toString() + b.toString();
    let B = b.toString() + a.toString();
    return Math.max(Number(A), Number(B));
}