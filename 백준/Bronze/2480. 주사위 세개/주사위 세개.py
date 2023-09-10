A, B, C = map(int, input().split())

# 만약 A, B, C가 모두 같다면 10000+같은눈x1,000

# 만약 A, B, C 중 2개만 같다면 1000+같은눈x100

# 다 다르다면 그중가장큰눈x100

if A == B and B == C and A == C:
  print(10000+A*1000)
elif (A == B and A != C) or (A == C and B != C):
  print(1000+A*100)
elif (B == C and A != B):
  print(1000+B*100)
else:
  list = [A, B, C]
  print(max(list)*100)