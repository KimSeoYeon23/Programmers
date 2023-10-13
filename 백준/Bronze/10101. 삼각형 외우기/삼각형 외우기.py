a = int(input())
b = int(input())
c = int(input())

total = a + b + c

if a == b and b == c:
  print('Equilateral')
elif total == 180:
  if a == b or b == c or a == c:
    print('Isosceles')
  else:
    print('Scalene')
else:
  print('Error')