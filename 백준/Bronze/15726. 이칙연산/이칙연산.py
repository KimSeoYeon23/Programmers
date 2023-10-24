A, B, C = map(int, input().split())
D = (A * B) / C
E = (A / B) * C

if D > E:
  print(int(D))
else:
  print(int(E))