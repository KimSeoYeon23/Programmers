def solution(arr, idx):
    answer = 0
    answer = list(filter(lambda x: arr[x] == 1 and x >= idx, range(len(arr))))

    return int(answer[0]) if len(answer) != 0 else -1