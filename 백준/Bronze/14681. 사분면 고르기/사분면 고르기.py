x = int(input())
y = int(input())

# 1사분면은 x와 y 모두 양수
# 2사분면은 x는 음수, y는 양수
# 3사분면은 x와 y 모두 음수
# 4사분면은 x는 양수, y는 음수

if x > 0 and y > 0:
  print(1)
elif x < 0 and y > 0:
  print(2)
elif x < 0 and y < 0:
  print(3)
elif x > 0 and y < 0:
  print(4)