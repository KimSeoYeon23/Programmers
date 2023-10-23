def solution(s1, s2):
    answer = 0
    for i in s2:
        if s1.count(i) == 1:
            answer += 1
    return answer