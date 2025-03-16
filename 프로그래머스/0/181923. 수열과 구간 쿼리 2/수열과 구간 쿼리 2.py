def solution(arr, queries):
    answer = []
    for s, e, k in queries:
        filter = []
        for i in range(s, e+1):
            if arr[i] > k:
                filter.append(arr[i])
        if filter:
            answer.append(min(filter))
        else:
            answer.append(-1)
    return answer