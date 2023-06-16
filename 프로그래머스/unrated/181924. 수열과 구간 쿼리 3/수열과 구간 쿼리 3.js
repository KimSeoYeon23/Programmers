function solution(arr, queries) {
    // 각 쿼리를 순회하며 arr에서 요소의 위치를 바꿉니다.
    for (let i = 0; i < queries.length; i++) {
        // 각 쿼리에서 i와 j의 위치를 얻습니다.
        let [pos1, pos2] = queries[i];
        // arr에서 해당 위치의 값을 서로 바꿉니다.
        let temp = arr[pos1];
        arr[pos1] = arr[pos2];
        arr[pos2] = temp;
    }

    // 모든 쿼리가 처리된 후의 arr를 반환합니다.
    return arr;
}
