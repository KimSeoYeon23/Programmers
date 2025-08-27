def solution(board, k):
    answer = 0
    
    for i, one in enumerate(board):
        for j, two in enumerate(one):
            if i+j <= k:
                answer += two
                
    return answer