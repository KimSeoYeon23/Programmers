def solution(num_list):
    multiple = 1
    sum_num = 0
    square = 0
    for i in range(len(num_list)):
        multiple *= num_list[i]
        sum_num += num_list[i]
        square = pow(sum_num, 2)
    if multiple < square:
        return 1
    else:
        return 0
    
    