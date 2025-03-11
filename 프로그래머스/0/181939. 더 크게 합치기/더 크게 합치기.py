def solution(a, b):
    first = int(str(a)+str(b))
    second = int(str(b)+str(a))
    if first > second:
        return first
    else:
        return second