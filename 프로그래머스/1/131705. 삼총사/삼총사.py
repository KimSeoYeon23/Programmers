from itertools import combinations

def solution(number):
    answer = 0
    number.sort()
    for i in combinations(number, 3):
        if sum(i) == 0:
            answer += 1
    return answer