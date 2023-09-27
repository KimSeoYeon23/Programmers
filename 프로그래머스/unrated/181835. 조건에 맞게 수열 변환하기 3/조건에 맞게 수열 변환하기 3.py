def solution(arr, k):
    result = []
    
    if k % 2 == 0:
        result = [num + k for num in arr]
    else:
        result = [num * k for num in arr]
    return result