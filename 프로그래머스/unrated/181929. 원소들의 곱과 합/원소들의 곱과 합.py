def solution(num_list):
    multiple = 1
    
    for i in num_list:
        multiple *= i
    
    if multiple < sum(num_list) ** 2:
        return 1
    else:
        return 0
    