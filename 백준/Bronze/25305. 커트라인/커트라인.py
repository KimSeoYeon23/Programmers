n, k = map(int, input().split())
x = list(map(int, input().split()))
sortX = sorted(x, reverse=True)
print(sortX[k-1])