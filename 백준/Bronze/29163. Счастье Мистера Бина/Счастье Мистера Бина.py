n = int(input())
door = list(map(int, input().split()))

odd_num, even_num = 0, 0

for num in door:
  if num % 2 == 0:
    even_num += 1
  else:
    odd_num += 1

if even_num > odd_num:
  print("Happy")
else:
  print("Sad")