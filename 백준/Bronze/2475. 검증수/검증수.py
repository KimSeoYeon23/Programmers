a = list(map(int, input().split()))
b = 0
c = 0

for i in a:
  b = pow(i, 2)
  c += b
print(c % 10)