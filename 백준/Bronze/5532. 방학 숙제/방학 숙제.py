L = int(input())
A = int(input())
B = int(input())
C = int(input())
D = int(input())

math = A // C
language = B // D

if math > language:
  if A % C == 0:
    print(L - math)
  else:
    print(L - 1 - math)
else:
  if B % D == 0:
    print(L - language)
  else:
    print(L - 1 - language)