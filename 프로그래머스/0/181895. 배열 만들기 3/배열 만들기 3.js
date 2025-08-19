function solution(arr, intervals) {
    var answer = [];
    const inter1 = [...intervals[0]]
    const inter2 = [...intervals[1]]
    answer.push(arr.slice(inter1[0], inter1[1]+1))
    answer.push(arr.slice(inter2[0], inter2[1]+1))
    
    return answer.flat();
}