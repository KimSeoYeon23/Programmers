n = int(input())
result = ""

for _ in range(n):
  result += "*"
  x = result.rjust(n)
  print(x)
