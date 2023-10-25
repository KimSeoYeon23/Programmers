def solution(x, n):
    answer = []
    multiple = 0
    for i in range(n):
        multiple += x
        answer.append(multiple)
    return answer