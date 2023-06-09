function solution(num_list) {
    let lastElement = num_list[num_list.length - 1];
    let secondLastElement = num_list[num_list.length - 2];

    // 마지막 원소가 그전 원소보다 큰 경우
    if(lastElement > secondLastElement) {
        num_list.push(lastElement - secondLastElement);
    } else { // 마지막 원소가 그전 원소보다 크지 않은 경우
        num_list.push(lastElement * 2);
    }

    return num_list;
}