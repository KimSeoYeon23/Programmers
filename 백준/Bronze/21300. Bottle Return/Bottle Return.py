bottle = list(map(int, input().split()))
result = 0

for i in bottle:
  result += i*5
print(result)