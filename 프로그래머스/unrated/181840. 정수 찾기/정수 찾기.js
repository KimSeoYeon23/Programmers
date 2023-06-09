function solution(num_list, n) {
    return num_list.find((item, i) => item === n) ? 1 : 0
}