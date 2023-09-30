def solution(num_list):
    total = 0
    multiple = 1
    if len(num_list) >= 11:
        for i in num_list:
            total += i
        return total
    else:
        for i in num_list:
            multiple *= i
        return multiple
