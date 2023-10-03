n = int(input())
total = 0
cubes = 0


for i in range(1, n+1):
  total += i
  cubes += i ** 3
print(total)
print(total ** 2)
print(cubes)