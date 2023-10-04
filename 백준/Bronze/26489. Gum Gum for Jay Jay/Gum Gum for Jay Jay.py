number = 0

while True:
  try:
    gum = input()
    number += 1
  except:
    break
print(number)