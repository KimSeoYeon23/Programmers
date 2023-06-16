function solution(num_list, n) {
    // Array.prototype.filter() 메소드를 사용하여 간격 n을 기준으로 원소를 필터링합니다.
    let filtered_list = num_list.filter((value, index) => {
        // 인덱스가 n으로 나누어 떨어지면 해당 원소를 새로운 배열에 포함합니다.
        return index % n === 0;
    });

    // 간격 n을 기준으로 필터링된 배열을 반환합니다.
    return filtered_list;
}
