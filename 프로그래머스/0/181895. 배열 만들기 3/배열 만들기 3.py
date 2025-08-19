def solution(arr, intervals):
    answer = []
    answer.append(arr[intervals[0][0]:intervals[0][1]+1])
    answer.append(arr[intervals[1][0]:intervals[1][1]+1])
    return sum(answer, [])