n = int(input())
long = "long "
int = "int"
result = ""

for i in range(n // 4):
  result += long

print(result + int)