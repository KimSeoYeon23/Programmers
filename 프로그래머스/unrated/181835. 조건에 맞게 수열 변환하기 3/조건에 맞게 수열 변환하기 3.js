function solution(arr, k) {
    return arr.map((item, i) => {
        return k % 2 !== 0
        ? arr[i] * k
        : arr[i] + k
    });
}