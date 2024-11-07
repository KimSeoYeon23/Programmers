x = int(input())
n = int(input())
result = 0
for i in range(1, n+1):
    a, b = map(int, input().split())
    result = result + (a * b)

print('Yes' if result == x else 'No')