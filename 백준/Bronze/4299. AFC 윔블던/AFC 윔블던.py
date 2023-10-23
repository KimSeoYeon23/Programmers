MK, AFC = map(int, input().split())

if MK < AFC:
  print(-1)
else:
  a = (MK + AFC) // 2
  b = (MK - AFC) // 2
  if (a + b) == MK and (a - b) == AFC:
    print(a, b)
  else:
    print(-1)
