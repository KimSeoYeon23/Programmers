score = [56, 24, 14, 6]
field_score = list(map(int, input().split()))
result = 0

for i in range(len(score)):
  result += score[i] * field_score[i]
print(result)