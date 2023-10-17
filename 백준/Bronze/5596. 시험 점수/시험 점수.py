manse = list(map(int, input().split()))
mingook = list(map(int, input().split()))

manse_total = 0
mingook_total = 0

for i in range(len(manse)):
  manse_total += manse[i]
  mingook_total += mingook[i]

if manse_total > mingook_total:
  print(manse_total)
elif manse_total < mingook_total:
  print(mingook_total)
else:
  print(mingook_total)