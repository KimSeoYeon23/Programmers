result = []

for _ in range(9):
  i = int(input())
  result.append(i)

print(max(result))
print(result.index(max(result))+1)