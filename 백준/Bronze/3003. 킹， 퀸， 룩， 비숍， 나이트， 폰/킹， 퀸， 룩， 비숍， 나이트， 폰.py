chess = [1, 1, 2, 2, 2, 8]
white_chess = list(map(int, input().split()))

for i in range(len(chess)):
  print(chess[i] - white_chess[i], end=" ")