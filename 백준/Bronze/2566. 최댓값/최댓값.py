# 9x9 행렬을 입력받기
matrix = [list(map(int, input().split())) for _ in range(9)]

# 최댓값과 좌표 초기화
max_num = 0
x, y = 0, 0

# 행렬의 모든 원소를 탐색하며 최댓값과 좌표 찾기
for i in range(9):
    for j in range(9):
        if matrix[i][j] > max_num:
            max_num = matrix[i][j]
            x, y = i, j

# 최댓값과 좌표 출력 (좌표는 1부터 시작이므로 +1 해줌)
print(max_num)
print(x+1, y+1)
