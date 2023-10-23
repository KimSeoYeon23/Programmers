A, B = map(int, input().split())
C = int(input())

two_bank_accounts = A + B
two_chickens = C * 2

if two_bank_accounts < two_chickens:
  print(two_bank_accounts)
else:
  print(two_bank_accounts - two_chickens)