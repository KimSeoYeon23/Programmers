def solution(myString):
    answer = []
    answer = list(filter(None, myString.split("x")))
    
    return sorted(answer)