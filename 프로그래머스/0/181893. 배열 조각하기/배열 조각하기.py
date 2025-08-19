def solution(arr, query):
    for (i, idx) in enumerate(query):
        if i % 2 == 0:
            arr = arr[:idx+1]
        else:
            arr = arr[idx:]
    return arr