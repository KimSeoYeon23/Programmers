L, M = map(int, input().split())
participant = list(map(int, input().split()))

total = L * M

for i in range(5):
  if total == participant[i]:
    print(0, end=" ")
  else:
    print(participant[i] - total, end=" ")