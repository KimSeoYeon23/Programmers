function solution(num_list) {
    let sort = num_list.sort((a, b) => a - b);
    return sort.slice(5);
}