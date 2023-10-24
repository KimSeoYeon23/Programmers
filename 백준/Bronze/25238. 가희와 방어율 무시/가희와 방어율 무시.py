a, b = map(int, input().split())
guard = a * (b / 100)
user_guard = a - guard

if user_guard >= 100:
  print(0)
else:
  print(1)