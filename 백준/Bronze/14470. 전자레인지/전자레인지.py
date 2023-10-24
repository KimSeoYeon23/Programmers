a = int(input())    # 현재 고기의 온도
b = int(input())    # 목표 고기의 온도
c = int(input())    # 얼어 있는 고기를 1°C 데우는 데 걸리는 시간
d = int(input())    # 얼어 있는 고기를 해동하는 데 걸리는 시간
e = int(input())    # 얼어 있지 않은 고기를 1°C 데우는 데 걸리는 시간

result = 0

if a < 0:
  a = abs(a) * c
  d = a + d
  result = d + e * b
  print(result)
else:
  result = (b - a) * e
  print(result)