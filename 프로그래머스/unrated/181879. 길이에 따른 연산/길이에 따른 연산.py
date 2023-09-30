def solution(num_list):
    multiple = 1
    if len(num_list) >= 11:
        return sum(num_list)
    else:
        for i in num_list:
            multiple *= i
        return multiple
